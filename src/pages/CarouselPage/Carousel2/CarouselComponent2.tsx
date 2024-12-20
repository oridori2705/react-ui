import { CarouselWrapper, Container, Item, NavButton } from './Carousel2.styled'
import { useCallback, useMemo, useState } from 'react'

type Direction = 'left' | 'right'

const CarouselComponent2 = ({
  images,
  initialIndex = 0
}: {
  images: string[]
  initialIndex?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const imageCount = images.length

  const { theta, radius } = useMemo(() => {
    const theta = 360 / imageCount
    const radius = Math.round(400 / Math.tan(Math.PI / imageCount))
    return {
      theta,
      radius
    }
  }, [imageCount])

  const move = useCallback(
    (direction: Direction) => {
      const nextIndex =
        direction === 'right' ? currentIndex + 1 : currentIndex - 1
      setCurrentIndex(nextIndex)
    },
    [currentIndex]
  )

  return (
    <CarouselWrapper>
      <Container
        style={{
          transform: `translateZ(${-1 * radius}px) rotateY(${-1 * theta * currentIndex}deg)`
        }}>
        {images.map((url, index) => (
          <Item
            key={index}
            current={index === currentIndex}
            style={{
              transform: `rotateY(${theta * index}deg) translateZ(${radius}px)`
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
    </CarouselWrapper>
  )
}

export default CarouselComponent2
