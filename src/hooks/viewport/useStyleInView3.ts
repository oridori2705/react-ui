import { RefObject, useLayoutEffect, useState } from 'react'
import { useViewportRect } from './useViewportRect'

type PositionKey = 'left' | 'right' | 'top' | 'bottom'
type Position = Partial<Record<PositionKey, string | number>>
type Style = Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>

// absoulte로 상대적인 위치로 했을 때는 절대 위치 값으로 처리를 해줘야 함(기존에는 상대 위치 값으로 처리함)
const useStyleInView3 = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  position: Position,
  positionType: 'absolute' | 'relative' = 'relative',
  needUpdate: boolean = true
) => {
  const viewportRect = useViewportRect()
  const [style, setStyle] = useState<Style>({})

  useLayoutEffect(() => {
    if (!needUpdate || !wrapperRef.current || !targetRef.current) return
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const targetRect = targetRef.current.getBoundingClientRect()

    // 수직 위치: 화면 아래 공간이 충분한지 확인하여 top 또는 bottom을 결정
    const verticalKey =
      wrapperRect.bottom + targetRect.height < viewportRect.height
        ? 'top'
        : 'bottom'
    // 수평 위치: 화면 오른쪽 공간이 충분한지 확인하여 left 또는 right를 결정
    const horizontalKey =
      wrapperRect.right + targetRect.width < viewportRect.width
        ? 'left'
        : 'right'

    if (positionType === 'absolute') {
      // 'absolute'일 경우: wrapper 요소의 절대 위치를 계산
      const absoluteTop = -viewportRect.top + wrapperRect.top

      setStyle({
        //top일 경우와 bottom일 경우에는 계산을 달리 해야함
        [verticalKey]:
          verticalKey === 'top'
            ? absoluteTop + wrapperRect.height + +(position.top || 0) // top일 경우, wrapper의 하단부터 시작
            : viewportRect.height - absoluteTop + +(position.bottom || 0), //bottom일 경우에는 아래를 기준으로 올려야 함
        [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
        [horizontalKey]:
          horizontalKey === 'left'
            ? wrapperRect.left - +(position.left || 0) // left일 경우, wrapper의 왼쪽에서 시작
            : viewportRect.width - wrapperRect.right + +(position.right || 0), // right일 경우, 화면 오른쪽에서 시작
        [horizontalKey === 'left' ? 'right' : 'left']: 'auto'
      })
    } else {
      //relative일 때(기준점이되는 부모가 존재할 때)
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

export default useStyleInView3
