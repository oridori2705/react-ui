import { TooltipContentType } from '../../pages/TooltipPage/Tooltip1/types'
import { useViewportRect } from './useViewportRect'
import { RefObject, useLayoutEffect, useState } from 'react'

type DirectionStyle = TooltipContentType['direction']

const useStyleInView = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  position: DirectionStyle
): DirectionStyle => {
  const viewportRect = useViewportRect()
  const [style, setStyle] = useState<DirectionStyle>(position)

  useLayoutEffect(() => {
    if (!wrapperRef.current || !targetRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const targetRect = targetRef.current.getBoundingClientRect()

    if (position === 'top' || position === 'bottom') {
      const verticalKey =
        wrapperRect.bottom + targetRect.height < viewportRect.height
          ? 'bottom'
          : 'top'
      setStyle(verticalKey)
    } else {
      const horizontalKey =
        wrapperRect.right + targetRect.width < viewportRect.width
          ? 'right'
          : 'left'
      setStyle(horizontalKey)
    }
  }, [viewportRect, wrapperRef, targetRef, position])

  return style
}

export default useStyleInView
