import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import {
  ImageSlideContainer,
  NavLeft,
  NavRight
} from '../ImageSlide1/ImageSlide1.styled'
import data from '../data'
import { useCallback, useRef, useState } from 'react'
import { ImageItem3, ImageSlide3Ul } from './ImageSlide2.styled'

type Direction = 'left' | 'right'
const dataLength = data.length

const ImageSlide2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLUListElement>(null)

  const move = useCallback(
    (direction: Direction) => () => {
      setCurrentIndex(prev => {
        const next =
          ((direction === 'right' ? prev + 1 : prev - 1) + dataLength) %
          dataLength
        containerRef.current!.scrollTo({
          left: next * 600,
          behavior: 'smooth'
        })
        return next
      })
    },
    []
  )

  return (
    <div>
      <h3>
        #2. 이미지 슬라이드
        <sub> scroll로 이미지 슬라이드하는 기능</sub>
      </h3>

      <ImageSlideContainer>
        <ImageSlide3Ul ref={containerRef}>
          {data.map((url, index) => (
            <ImageItem3 key={index}>
              <LazyImageComponent1
                src={url}
                width={600}
                height={320}
              />
              <span>#{index + 1}</span>
            </ImageItem3>
          ))}
        </ImageSlide3Ul>
        <NavLeft onClick={move('left')} />
        <NavRight onClick={move('right')} />
      </ImageSlideContainer>
    </div>
  )
}

export default ImageSlide2

//현재 가로스크롤이 마우스로 안되는 중(기능은 잘됨)
