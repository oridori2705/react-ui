import {
  ForwardedRef,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import {
  BoxList,
  NextNavButton,
  Observer,
  PrevNavButton,
  ScrollBoxContainer,
  UlContainer
} from './HorizontalScrollBox.styled'
import useIntersectionObserver from './useIntersectionObserver'

type Direction = 'prev' | 'next'
type ItemElemType = HTMLLIElement | null
const DefaultButtonState = { prev: true, next: true }

export type ScrollBoxHandle =
  | {
      scrollFocus: (index: number, behavior?: 'instant' | 'smooth') => void
    }
  | null
  | undefined

type ScrollBoxProps<T> = {
  list: T[]
  Item: (props: T & { handleClick?: () => void }) => JSX.Element
  currentIndex?: number
  wrapperClassName?: string
  handleItemClick?: (item: T, index: number) => () => void
  isSetScrollBar?: boolean
}

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

const ScrollBoxComponent = <T extends { id: string }>(
  {
    list,
    Item,
    currentIndex = 0,
    wrapperClassName = '',
    handleItemClick,
    isSetScrollBar = true
  }: ScrollBoxProps<T>,
  ref: ForwardedRef<unknown>
) => {
  const [buttonEnabled, setButtonEnabled] = useState<{
    prev: boolean
    next: boolean
  }>(DefaultButtonState)
  const listRef = useRef<HTMLUListElement>(null)
  const itemsRef = useRef<ItemElemType[]>([])
  const watcherRef = useRef<ItemElemType[]>([])
  const { entries: watcherEntries } = useIntersectionObserver(watcherRef)

  const scrollFocus = useCallback(
    (index: number, behavior: 'instant' | 'smooth' = 'instant') => {
      itemsRef.current[index]?.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior
      })
    },
    []
  )

  useImperativeHandle(
    ref,
    () => ({
      scrollFocus
    }),
    [scrollFocus]
  )

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
    <ScrollBoxContainer wrapperClassName={wrapperClassName}>
      <UlContainer
        isSetScrollBar={isSetScrollBar}
        ref={listRef}>
        <Observer
          ref={r => {
            watcherRef.current[0] = r
          }}
          data-direction="prev"
        />
        {list.map((item, i) => (
          <BoxList
            key={item.id}
            isCurrent={currentIndex === i}
            ref={r => {
              itemsRef.current[i] = r
            }}>
            <Item
              {...item}
              handleClick={handleItemClick?.(item, i)}
            />
          </BoxList>
        ))}
        <Observer
          ref={r => {
            watcherRef.current[1] = r
          }}
          data-direction="next"
        />
      </UlContainer>
      <PrevNavButton
        isActive={buttonEnabled.prev}
        onClick={() => move('prev')}
      />
      <NextNavButton
        isActive={buttonEnabled.next}
        onClick={() => move('next')}
      />
    </ScrollBoxContainer>
  )
}
const ForwardedScrollBox = forwardRef(ScrollBoxComponent) as <
  T extends { id: string }
>(
  props: ScrollBoxProps<T> & { ref: Ref<ScrollBoxHandle> }
) => JSX.Element

export default ForwardedScrollBox
