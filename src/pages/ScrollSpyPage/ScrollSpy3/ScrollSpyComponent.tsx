import useIntersectionObserver from '@/pages/HorizontalScrollBoxPage/HorizontalScrollBox1/useIntersectionObserver'
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import {
  Nav,
  NavContainer,
  NavItem,
  Title
} from '../ScrollSpy1/ScrollSpy.styled'
import { ListItem, UList } from '../ScrollSpy1/DefaultComponent'

const HeaderHeight = 60

const IOOptions: IntersectionObserverInit = {
  rootMargin: `-${HeaderHeight}px 0% 0% 0%`,
  threshold: [0.5, 1]
}

type Elem = HTMLElement | null

const ScrollSpyComponent = ({ children }: { children: ReactElement }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navsRef = useRef<Elem[]>([])
  const itemsRef = useRef<Elem[]>([])
  const titleRefs = useRef<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { entries } = useIntersectionObserver(itemsRef, IOOptions)

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
    const listItemTitles = containerRef.current?.querySelectorAll('.list-title')

    if (!listItems || !listItemTitles) return
    itemsRef.current = Array.from(listItems).map(elem => elem as HTMLElement)
    titleRefs.current = Array.from(listItemTitles).map(
      elem => elem.textContent || ''
    )
  }, [])

  useEffect(() => {
    const intersectingTargets = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => entry.target as HTMLElement)

    if (intersectingTargets.length === 0) return

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
        <Title>
          #1. React<sub>scroll event</sub>
        </Title>
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
                    {titleRefs.current[Number(item.dataset!.number)]}
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
