import { useEffect, useRef, useState } from 'react'
import useIntersectionObserverArray from '../../../hooks/useIntersectionObserverArray'
import { ImageContent3 } from './LazyImage2.styled'
import { LazyImageComponentProps } from '../LazyImage1/LazyImageComponent1'

const ioOptions: IntersectionObserverInit = {
  threshold: 0
}

const LazyImageComponent3 = ({
  src,
  width = 600,
  height = 320,
  alt = '이미지',
  ...props
}: LazyImageComponentProps) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)
  const { entries, observerRef } = useIntersectionObserverArray(
    imgRef,
    ioOptions
  )

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
      alt={alt}
      {...props}
    />
  )
}
export default LazyImageComponent3
