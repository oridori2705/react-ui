import { RefObject, useLayoutEffect, useState } from 'react'
import { useViewport } from './useViewport'

type PositionKey = 'left' | 'right' | 'top' | 'bottom'
type Position = Partial<Record<PositionKey, string | number>>
type Style = Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>

// absolute로 상대적인 위치로 했을 때는 절대 위치 값으로 처리를 해줘야 함(기존에는 상대 위치 값으로 처리함)
const useStyleInView4 = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  position: Position,
  positionType: 'absolute' | 'relative' = 'relative',
  needUpdate: boolean = true
) => {
  const viewportRect = useViewport()
  const [style, setStyle] = useState<Style>({})

  useLayoutEffect(() => {
    if (!needUpdate || !wrapperRef.current || !targetRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const targetRect = targetRef.current.getBoundingClientRect()

    const verticalKey =
      wrapperRect.bottom + targetRect.height < viewportRect.height
        ? 'top'
        : 'bottom'
    const horizontalKey =
      wrapperRect.right + targetRect.width < viewportRect.width
        ? 'left'
        : 'right'

    if (positionType === 'absolute') {
      const absoluteTop = -viewportRect.top + wrapperRect.top

      setStyle({
        [verticalKey]:
          verticalKey === 'top'
            ? absoluteTop + wrapperRect.height + +(position.top || 0)
            : viewportRect.height - absoluteTop + +(position.bottom || 0),
        [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
        [horizontalKey]:
          horizontalKey === 'left'
            ? wrapperRect.left - +(position.left || 0)
            : viewportRect.width - wrapperRect.right + +(position.right || 0),
        [horizontalKey === 'left' ? 'right' : 'left']: 'auto'
      })
    } else {
      setStyle({
        [verticalKey]: position[verticalKey] || 0,
        [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
        [horizontalKey]: position[horizontalKey] || 0,
        [horizontalKey === 'left' ? 'right' : 'left']: 'auto'
      })
    }
  }, [viewportRect, wrapperRef, targetRef, position, needUpdate, positionType])

  return style
}

export default useStyleInView4

//개선점 : useViewport로 ContextAPI를 사용하지 않아도 됨
// 개선해야될 점: 현재는 targetRect요소가 충분한 공간이 안생기면 무조건 bottom으로 되는데 만약 뷰포트의 윗공간도 없다면 target요소가 잘려보이게 된다.
