import { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { Container } from './LazyImage2.styled'
import { ImageContent2 } from './LazyImage2.styled'

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
  width: number
  height: number
  children: React.ReactNode
}) => {
  const smallSizeUrl = url.replace('/600/320', '/60/32')

  return (
    <Container
      style={{
        backgroundImage: `url(${smallSizeUrl})`,
        width: `${width}px`,
        height: `${height}px`
      }}>
      {children}
    </Container>
  )
}

const LazyImageComponent2 = ({
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
        alt=""
      />
    </Wrapper>
  )
}

export default LazyImageComponent2
