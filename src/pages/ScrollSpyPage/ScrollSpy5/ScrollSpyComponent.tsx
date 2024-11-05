import {
  Children,
  MutableRefObject,
  ReactElement,
  ReactNode,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { ListItem, UList } from '../ScrollSpy1/DefaultComponent'
import useIntersectionObserver from '@/pages/HorizontalScrollBoxPage/HorizontalScrollBox1/useIntersectionObserver'
import { PageLayout } from '../ScrollSpy4/ScrollSpyNav.styled'

const HeaderHeight = 60

const IOOptions: IntersectionObserverInit = {
  rootMargin: `-${HeaderHeight}px 0% 0% 0%`,
  threshold: [0.5, 1]
}

type Elem = HTMLElement | null

export interface RenderNavProps {
  currentIndex: number
  navsRef: MutableRefObject<(HTMLElement | null)[]>
  onNavClick: (index: number) => void
}

interface ScrollSpyProps {
  children: ReactElement
  renderNav: (props: RenderNavProps) => ReactNode
}

const ScrollSpyComponent = ({ children, renderNav }: ScrollSpyProps) => {
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
    const element = navsRef.current[index]

    if (element) {
      const hasVerticalScroll = element.scrollHeight > element.clientHeight

      const blockPosition = hasVerticalScroll ? 'nearest' : 'center'

      element.scrollIntoView({
        block: blockPosition,
        inline: 'center',
        behavior: 'instant'
      })
    }
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
    itemsRef.current = Array.from(listItems).map(elem => elem as HTMLElement)
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
    <PageLayout>
      {renderNav({
        currentIndex,
        navsRef,
        onNavClick: handleNavClick
      })}
      <div ref={containerRef}>{children}</div>
    </PageLayout>
  )
}

const ScrollSpy = Object.assign(ScrollSpyComponent, {
  UList,
  ListItem
})

export default ScrollSpy
