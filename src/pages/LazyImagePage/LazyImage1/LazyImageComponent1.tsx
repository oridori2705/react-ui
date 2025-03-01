import { ComponentProps, useEffect, useRef, useState } from 'react'
import useIntersectionObserverArray from '../../../hooks/useIntersectionObserverArray'
import { ImageContent } from './LazyImage1.styled'
import fallbackImage from '@/assets/images/fallbackImage.png'

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
  const [error, setError] = useState(false)
  const { entries, observerRef } = useIntersectionObserverArray(
    imgRef,
    ioOptions
  )

  const onLoad = () => setLoaded(true)
  const onError = () => setError(true)

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

  if (error) return <img src={fallbackImage} />

  return (
    <ImageContent
      load={!loaded}
      ref={imgRef}
      width={width}
      height={height}
      onError={onError}
      onLoad={onLoad}
      alt={alt}
    />
  )
}
export default LazyImageComponent1
