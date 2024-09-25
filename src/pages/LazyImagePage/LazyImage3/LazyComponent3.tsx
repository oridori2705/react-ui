import { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { ImageContent3 } from './LazyImage2.styled'

const ioOptions: IntersectionObserverInit = {
  threshold: 0
}

const LazyImageComponent3 = ({
  src,
  width,
  height
}: {
  src: string
  width: number
  height: number
}) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const { entries, observerRef } = useIntersectionObserver(imgRef, ioOptions)

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      imgRef.current!.setAttribute('src', src)
      imgRef.current!.setAttribute('loading', 'lazy')
      observerRef.current?.disconnect()
      return
    }

    const isVisible = entries[0]?.isIntersecting
    if (isVisible) {
      imgRef.current!.setAttribute('src', src)
      observerRef.current?.disconnect()
    }
  }, [src, entries, observerRef])

  return (
    <ImageContent3
      load={loaded}
      ref={imgRef}
      width={width}
      height={height}
      onLoad={onLoad}
      alt=""
    />
  )
}
export default LazyImageComponent3
