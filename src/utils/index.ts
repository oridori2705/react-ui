import { RefObject } from 'react'

export const measureLines = (elem: HTMLElement, val: string) => {
  if (!elem || !val) return 0
  const canvas = document.createElement('canvas')
  const canvasContext: CanvasRenderingContext2D = canvas.getContext('2d')!
  const style = window.getComputedStyle(elem)
  canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue(
    'font-family'
  )}`
  const measuredLines = val.split('\n').reduce((r, c) => {
    const res = Math.max(
      Math.ceil(canvasContext.measureText(c).width / elem!.offsetWidth),
      1
    )
    return r + res
  }, 0)
  return measuredLines
}

export const pxToLineHeightEm = ({
  pxValue,
  elemRef
}: {
  pxValue: string
  elemRef: RefObject<HTMLDivElement>
}) => {
  const withoutPxOrPercent = pxValue === 'normal' ? 20 : parseFloat(pxValue)
  const parentFontSize = elemRef.current
    ? parseFloat(getComputedStyle(elemRef.current).fontSize)
    : 16

  return `${withoutPxOrPercent / parentFontSize}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounceFn = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  let timeout: ReturnType<typeof setTimeout>

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  return debouncedCallback
}
