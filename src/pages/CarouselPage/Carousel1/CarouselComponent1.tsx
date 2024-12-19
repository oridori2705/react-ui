import Pagination2 from '@/pages/ImageSlidePage/ImageSlide3/Pagination2'
import { CarouselWrapper, Container, Item, NavButton } from './Carousel1.styled'
import { useCallback, useEffect, useRef, useState } from 'react'

type Direction = 'left' | 'right'

const CarouselComponent1 = ({
  images,
  initialIndex = 0
}: {
  images: string[]
  initialIndex?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])

  const moveTo = useCallback(
    (nextIndex: number, direction?: Direction) => {
      const $current = itemsRef.current![currentIndex] as HTMLLIElement
      const $next = itemsRef.current![nextIndex] as HTMLLIElement
      if (nextIndex === currentIndex) return

      const dir = direction || (nextIndex > currentIndex ? 'right' : 'left')

      const handleAnimationEnd = () => {
        $current.removeEventListener('animationend', handleAnimationEnd)
        setCurrentIndex(nextIndex)
      }
      $current.addEventListener('animationend', handleAnimationEnd)
      $current.classList.add(`${dir}_current`)
      $next.classList.add(`${dir}_next`)
    },
    [currentIndex]
  )

  const move = useCallback(
    (direction: Direction) => {
      const nextIndex =
        ((direction === 'right' ? currentIndex + 1 : currentIndex - 1) +
          images.length) %
        images.length
      moveTo(nextIndex, direction)
    },
    [images, currentIndex, moveTo]
  )

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [images, initialIndex])

  return (
    <CarouselWrapper>
      <Container>
        {images.map((url, index) => (
          <Item
            key={index}
            current={index === currentIndex}
            ref={r => {
              itemsRef.current[index] = r
            }}>
            <img
              src={url}
              width="600"
              height="320"
            />
            <span>#{index + 1}</span>
          </Item>
        ))}
      </Container>
      <NavButton
        direction="left"
        onClick={() => move('left')}
      />
      <NavButton
        direction="right"
        onClick={() => move('right')}
      />
      <Pagination2
        totalPages={images.length}
        currentIndex={currentIndex}
        visibleCount={6}
        handleMove={moveTo}
      />
    </CarouselWrapper>
  )
}

export default CarouselComponent1
