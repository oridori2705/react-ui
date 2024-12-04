import { ReactNode, useEffect, useRef, useState } from 'react'
import useIntersectionObserverArray from '../../../hooks/useIntersectionObserverArray'
import { Container } from './LazyImage2.styled'
import { ImageContent2 } from './LazyImage2.styled'
import { LazyImageComponentProps } from '../LazyImage1/LazyImageComponent1'

const ioOptions: IntersectionObserverInit = {
  threshold: 0
}

const Wrapper = ({
  url,
  width,
  height,
  children
}: {
  url: string
  width: string | number
  height: string | number
  children: ReactNode
}) => {
  const smallSizeUrl = url.replace('/600/320', '/60/32')

  return (
    <Container
      url={smallSizeUrl}
      width={width}
      height={height}>
      {children}
    </Container>
  )
}

const LazyImageComponent2 = ({
  src,
  width = 600,
  height = 320,
  alt = '이미지'
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
    const imgElement = imgRef.current
    if (!imgElement) return
    if ('loading' in HTMLImageElement.prototype) {
      imgElement.setAttribute('src', src)
      imgElement.setAttribute('loading', 'lazy')
      observerRef.current?.disconnect()
      return
    }

    const isVisible = entries[0]?.isIntersecting
    if (isVisible) {
      imgElement.addEventListener('load', onLoad, { once: true })
      imgElement.setAttribute('src', src)
      observerRef.current?.disconnect()
    }
    return () => {
      imgElement.removeEventListener('load', onLoad)
    }
  }, [src, entries, observerRef])

  return (
    <Wrapper
      url={src}
      width={width}
      height={height}>
      <ImageContent2
        ref={imgRef}
        width={width}
        height={height}
        load={loaded}
        onLoad={onLoad}
        alt={alt}
      />
    </Wrapper>
  )
}

export default LazyImageComponent2
