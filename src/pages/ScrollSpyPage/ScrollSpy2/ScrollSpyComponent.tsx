import useIntersectionObserver from '@/pages/HorizontalScrollBoxPage/HorizontalScrollBox1/useIntersectionObserver'
import {
  Children,
  ReactElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { Nav, NavContainer, NavItem } from '../ScrollSpy1/ScrollSpy.styled'
import { ListItem, UList } from '../ScrollSpy1/DefaultComponent'

const HeaderHeight = 60

const IOOptions: IntersectionObserverInit = {
  rootMargin: `-${HeaderHeight}px 0% 0% 0%`,
  threshold: [0.5]
}

type Elem = HTMLElement | null

const ScrollSpyComponent = ({ children }: { children: ReactElement }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navsRef = useRef<Elem[]>([])
  const itemsRef = useRef<Elem[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { entries } = useIntersectionObserver(itemsRef, IOOptions)

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

  const setCurrentItem = useCallback((index: number) => {
    setCurrentIndex(index)
    navsRef.current[index]?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'instant'
    })
  }, [])

  const handleNavClick = useCallback((index: number) => {
    const scrollTop = document.scrollingElement!.scrollTop
    const itemY = itemsRef.current[index]?.getBoundingClientRect().top || 0
    const top = scrollTop + itemY - HeaderHeight
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    const listItems = containerRef.current?.querySelectorAll(
      'ul > li[data-number]'
    )

    if (!listItems) return
    itemsRef.current = Array.from(listItems).map(elem => {
      return elem as HTMLElement
    })
  }, [])

  useEffect(() => {
    const intersectingTargets = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => entry.target as HTMLElement)

    if (intersectingTargets.length === 0) return

    //관찰 시점이 아닌 현재 시점에서 top값을 다시 계산
    const positions = intersectingTargets.map(element => ({
      index: Number(element.dataset.number),
      distance: Math.abs(element.getBoundingClientRect().top - HeaderHeight)
    }))

    const closest = positions.reduce((prev, curr) =>
      prev.distance < curr.distance ? prev : curr
    )

    setCurrentItem(closest.index)
  }, [entries, setCurrentItem])

  return (
    <div>
      <NavContainer>
        <Nav>
          {itemsRef.current?.map(
            item =>
              item && (
                <NavItem
                  $isCurrent={currentIndex === Number(item.dataset!.number)}
                  key={item.dataset.id}
                  ref={r => {
                    navsRef.current[Number(item.dataset!.number)] = r
                  }}>
                  <button
                    onClick={() =>
                      handleNavClick(Number(item.dataset!.number))
                    }>
                    {Number(item.dataset!.number) + 1}
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
