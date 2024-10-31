import {
  Children,
  ReactElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { Container, Nav, NavItem, Title } from './ScrollSpy.styled'
import { useViewportRect } from '@/hooks/viewport/useViewportRect'
import { ListItem, UList } from './DefaultComponent'

const HeaderHeight = 60

type ItemInfo = {
  scrollNumber: number
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
      setCurrentIndex(target.scrollNumber)
      navsRef.current[target.scrollNumber]?.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'instant'
      })
    }
  }, [viewportTop])

  const handleNavClick = useCallback((scrollNumber: number) => {
    const itemY = (itemsRef.current[scrollNumber]?.top || 0) - HeaderHeight
    window.scrollTo({
      top: itemY,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
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
          scrollNumber: index
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
    <Container>
      <header className="floatingHeader">
        <Title>
          #1. React<sub>scroll event</sub>
        </Title>
        <Nav>
          {itemsRef.current?.map(
            item =>
              item && (
                <NavItem
                  $isCurrent={currentIndex === item.scrollNumber}
                  key={item.elem.dataset.id}
                  ref={r => {
                    navsRef.current[item.scrollNumber] = r
                  }}>
                  <button onClick={() => handleNavClick(item.scrollNumber)}>
                    {item.scrollNumber + 1}
                  </button>
                </NavItem>
              )
          )}
        </Nav>
      </header>
      <div ref={containerRef}>{children}</div>
    </Container>
  )
}

const ScrollSpy = Object.assign(ScrollSpyComponent, {
  UList,
  ListItem
})
export default ScrollSpy