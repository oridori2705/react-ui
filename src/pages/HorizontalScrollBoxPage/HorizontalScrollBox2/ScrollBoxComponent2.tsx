import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Wrapper } from './DefaultComponent'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import {
  GradientOverlay,
  NextNavButton,
  Observer,
  PrevNavButton,
  ScrollBoxContainer,
  UlContainer
} from '../HorizontalScrollBox1/HorizontalScrollBox.styled'
import { ScrollBoxContext } from './ScrollBoxContext'

type Direction = 'prev' | 'next'
export type ItemElemType = HTMLLIElement | null
const DefaultButtonState = { prev: true, next: true }

const ScrollBoxComponent = ({
  isSetScrollBar,
  children
}: {
  isSetScrollBar?: boolean
  children: ReactNode
}) => {
  const [buttonEnabled, setButtonEnabled] = useState<{
    prev: boolean
    next: boolean
  }>(DefaultButtonState)
  const listRef = useRef<HTMLUListElement>(null)
  const itemsRef = useRef<ItemElemType[]>([])
  const watcherRef = useRef<ItemElemType[]>([])
  const { entries: watcherEntries } = useIntersectionObserver(watcherRef)

  const registerItem = useCallback((index: number, element: ItemElemType) => {
    itemsRef.current[index] = element
  }, [])

  const move = useCallback((direction: Direction) => {
    if (!listRef.current || !itemsRef.current.length) return
    const { left, right } = getVisibleEdgeItems(
      listRef.current,
      itemsRef.current
    )
    const elem = direction === 'prev' ? left : right
    elem?.scrollIntoView({
      inline: direction === 'prev' ? 'end' : 'start',
      block: 'nearest',
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    if (!watcherEntries.length) {
      setButtonEnabled(DefaultButtonState)
      return
    }
    setButtonEnabled(() => {
      const newState = { ...DefaultButtonState }
      watcherEntries.forEach(e => {
        const direction = (e.target as HTMLLIElement).dataset
          .direction as Direction
        newState[direction] = false
      })
      return newState
    })
  }, [watcherEntries])

  return (
    <div>
      <ScrollBoxContainer>
        <ScrollBoxContext.Provider value={{ registerItem }}>
          <UlContainer
            isSetScrollBar={isSetScrollBar}
            ref={listRef}>
            <Observer
              ref={r => {
                watcherRef.current[0] = r
              }}
              data-direction="prev"
            />
            {children}
            <Observer
              ref={r => {
                watcherRef.current[1] = r
              }}
              data-direction="next"
            />
          </UlContainer>
        </ScrollBoxContext.Provider>
        <GradientOverlay
          showLeft={buttonEnabled.prev}
          showRight={buttonEnabled.next}
        />
        <PrevNavButton
          isActive={buttonEnabled.prev}
          onClick={() => move('prev')}
        />
        <NextNavButton
          isActive={buttonEnabled.next}
          onClick={() => move('next')}
        />
      </ScrollBoxContainer>
    </div>
  )
}

const ScrollBox = Object.assign(ScrollBoxComponent, {
  Wrapper
})
export default ScrollBox

const getVisibleEdgeItems = (
  $list: HTMLUListElement,
  $items: ItemElemType[]
) => {
  const { left: lLeft, right: lRight } = $list.getBoundingClientRect()
  const isVisible = ($item: ItemElemType) => {
    const { left, right } = $item?.getBoundingClientRect() || {
      left: 0,
      right: 0
    }
    return left <= lRight && right >= lLeft
  }
  const leftIndex = Math.max($items.findIndex(isVisible), 0)
  const rightIndex = Math.min(
    $items.findLastIndex(isVisible),
    $items.length - 1
  )
  return { left: $items[leftIndex], right: $items[rightIndex] }
}
