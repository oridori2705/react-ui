import {
  Children,
  ReactElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { Nav, NavContainer, NavItem } from './ScrollSpy.styled'
import { useViewportRect } from '@/hooks/viewport/useViewportRect'
import { ListItem, UList } from './DefaultComponent'

const HeaderHeight = 60

type ItemInfo = {
  scrollIndex: number
  top: number
  height: number
  elem: HTMLElement
} | null

const ScrollSpyComponent = ({ children }: { children: ReactElement }) => {
  const { top: viewportTop } = useViewportRect()
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsRef = useRef<ItemInfo[]>([])
  const navsRef = useRef<(HTMLLIElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  if (children.type !== UList) {
    throw new Error(
      'ScrollSpy를 사용할 때 반드시 ScrollSpy.UList 컴포넌트를 사용해야합니다.'
    )
  }

  const childrenArray = Children.toArray(children.props.children)
  childrenArray.forEach(child => {
    if (!isValidElement(child) || child.type !== ListItem) {
      throw new Error(
        'ScrollSpy.UList의 자식 컴포넌트는 반드시 ScrollSpy.ListItem 컴포넌트여야 합니다.'
      )
    }
  })

  const setCurrentItem = useCallback(() => {
    const scrollTop = viewportTop * -1
    const target = itemsRef.current.find(
      item =>
        item &&
        scrollTop >= item.top - HeaderHeight - item.height / 2 &&
        scrollTop < item.top - HeaderHeight + item.height / 2
    )
    if (target) {
      setCurrentIndex(target.scrollIndex)
      navsRef.current[target.scrollIndex]?.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'instant'
      })
    }
  }, [viewportTop])

  const handleNavClick = useCallback((scrollIndex: number) => {
    const itemY = (itemsRef.current[scrollIndex]?.top || 0) - HeaderHeight
    window.scrollTo({
      top: itemY,
      behavior: 'smooth'
    })
  }, [])

  useLayoutEffect(() => {
    const calculateItems = () => {
      const scrollTop = document.scrollingElement!.scrollTop
      const listItems = containerRef.current?.querySelectorAll(
        'ul > li[data-number]'
      )

      if (!listItems) return
      itemsRef.current = Array.from(listItems).map((elem, index) => {
        const { top, height } = elem.getBoundingClientRect()
        return {
          elem: elem as HTMLElement,
          top: top + scrollTop,
          height,
          scrollIndex: index
        }
      })
    }
    calculateItems()

    const resizeObserver = new ResizeObserver(calculateItems)
    resizeObserver.observe(document.scrollingElement!)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    setCurrentItem()
  }, [viewportTop, setCurrentItem])

  return (
    <div>
      <NavContainer>
        <Nav>
          {itemsRef.current?.map(
            item =>
              item && (
                <NavItem
                  $isCurrent={currentIndex === item.scrollIndex}
                  key={item.elem.dataset.id}
                  ref={r => {
                    navsRef.current[item.scrollIndex] = r
                  }}>
                  <button onClick={() => handleNavClick(item.scrollIndex)}>
                    {item.scrollIndex + 1}
                  </button>
                </NavItem>
              )
          )}
        </Nav>
      </NavContainer>
      <div ref={containerRef}>{children}</div>
    </div>
  )
}

const ScrollSpy = Object.assign(ScrollSpyComponent, {
  UList,
  ListItem
})
export default ScrollSpy
