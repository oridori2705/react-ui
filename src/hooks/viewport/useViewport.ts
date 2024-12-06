import { useEffect, useRef } from 'react'
import { DefaultRect, Rect } from './viewportUtils'

export const useViewport = () => {
  const storedRef = useRef<Rect>(DefaultRect)

  const updateViewport = () => {
    const elem = typeof document !== 'undefined' && document.scrollingElement
    if (!elem) return

    const { left, top, width, height } = elem.getBoundingClientRect()
    const newRect = {
      left,
      top,
      width,
      height,
      scrollHeight: elem.scrollHeight
    }

    storedRef.current = newRect
  }

  useEffect(() => {
    updateViewport()
    const resizeObserver = new ResizeObserver(updateViewport)
    window.addEventListener('scroll', updateViewport)
    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener('scroll', updateViewport)
      resizeObserver.disconnect()
    }
  }, [])

  return storedRef.current
}
