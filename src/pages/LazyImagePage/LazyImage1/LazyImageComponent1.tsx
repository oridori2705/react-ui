import { ComponentProps, useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { ImageContent } from './LazyImage1.styled'

const ioOptions: IntersectionObserverInit = {
  threshold: 0
}

export interface LazyImageComponentProps extends ComponentProps<'img'> {
  src: string
}

const LazyImageComponent1 = ({
  src,
  width = 600,
  height = 320,
  alt = '이미지'
}: LazyImageComponentProps) => {
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
    <ImageContent
      load={loaded}
      ref={imgRef}
      width={width}
      height={height}
      onLoad={onLoad}
      alt={alt}
    />
  )
}
export default LazyImageComponent1
