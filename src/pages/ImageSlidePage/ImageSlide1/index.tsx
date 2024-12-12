import { useCallback, useRef, useState } from 'react'
import {
  ImageItem,
  ImageSlide1Container,
  ImageSlideContainer,
  NavLeft,
  NavRight
} from './ImageSlide.styled'
import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import data from '../data'

type Direction = 'left' | 'right'
const dataLength = data.length

const ImageSlide1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const animatingRef = useRef(false)

  const move = useCallback(
    (direction: Direction) => () => {
      if (animatingRef.current) return

      setCurrentIndex(prev => {
        const next =
          ((direction === 'right' ? prev + 1 : prev - 1) + dataLength) %
          dataLength
        animatingRef.current = true
        return next
      })
    },
    []
  )

  const handleTransitionEnd = () => {
    animatingRef.current = false
  }

  return (
    <div>
      <ImageSlideContainer>
        <ImageSlide1Container
          moveLeft={currentIndex * 600 * -1}
          onTransitionEnd={handleTransitionEnd}>
          {data.map((url, index) => (
            <ImageItem key={index}>
              <LazyImageComponent1
                src={url}
                width={600}
                height={320}
              />
              <span>#{index + 1}</span>
            </ImageItem>
          ))}
        </ImageSlide1Container>
        <NavLeft onClick={move('left')} />
        <NavRight onClick={move('right')} />
      </ImageSlideContainer>
    </div>
  )
}

export default ImageSlide1

// 0 <= x <= data.length 로 move하는 경우
// const next = Math.max(Math.min(direction === "right" ? currentIndex + 1 : currentIndex -1, data.length-1),0)
// 0이하로 가지 않도록 Math.max에 0이 존재하고
// currentIndex가 data.length에서 더 커지지 않도록 Math.min으로 막아준 것이다.
// 위 조건은 0에서 -1로 갈 수 없고, data.length 이상 갈 수 없도록 하는 조건이다.

// 만약 0에서 -1 할 경우 data.length가 되도록 하려면 currentIndex % data.length를 하면된다.
