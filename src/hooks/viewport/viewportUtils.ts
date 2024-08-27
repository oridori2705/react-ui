// constants.ts
export type Rect = Pick<DOMRect, 'left' | 'top' | 'width' | 'height'> & {
  scrollHeight: number
}

export const DefaultRect: Rect = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  scrollHeight: 0
}

export const rectKeys: (keyof Rect)[] = [
  'scrollHeight',
  'left',
  'top',
  'width',
  'height'
]

export const isSameRect = (prev: Rect, next: Rect) => {
  return rectKeys.every(k => prev?.[k] === next?.[k])
}

export const getViewportRect = () => {
  let stored: Rect = DefaultRect
  return () => {
    const elem = typeof document !== 'undefined' && document.scrollingElement
    if (!elem) return stored
    const { left, top, width, height } = elem.getBoundingClientRect()
    const newRect = {
      left,
      top,
      width,
      height,
      scrollHeight: elem.scrollHeight
    }

    if (newRect && !isSameRect(stored, newRect)) stored = newRect
    return stored
  }
}

export const subscribe = (callback: () => void) => {
  const resizeObserver = new ResizeObserver(callback)
  window.addEventListener('scroll', callback)
  resizeObserver.observe(document.body)
  return () => {
    window.removeEventListener('scroll', callback)
    resizeObserver.disconnect()
  }
}
