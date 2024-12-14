import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ImageItem,
  ImageSlideContainer,
  NavLeft,
  NavRight
} from '../ImageSlide1/ImageSlide1.styled'
import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import data from '../data'
import Pagination from './Pagination'
import { ImageSlide3Ul } from '../ImageSlide2/ImageSlide2.styled'

type Direction = 'left' | 'right'
const dataLength = data.length

const ImageSlide3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLUListElement>(null)
  const scrollingRef = useRef(false)

  const imageWidth = 600

  const moveToIndex = useCallback((index: number) => {
    if (scrollingRef.current) return
    containerRef.current!.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth'
    })
    scrollingRef.current = true
    setCurrentIndex(index)
  }, [])

  const move = useCallback(
    (direction: Direction) => () => {
      if (scrollingRef.current) return
      setCurrentIndex(prev => {
        const next =
          ((direction === 'right' ? prev + 1 : prev - 1) + dataLength) %
          dataLength
        containerRef.current!.scrollTo({
          left: next * imageWidth,
          behavior: 'smooth'
        })
        scrollingRef.current = true
        return next
      })
    },
    []
  )

  useEffect(() => {
    const handleScrollEnd = () => {
      scrollingRef.current = false
    }
    const $container = containerRef.current

    //리액트에서 onScrollEnd를 지원하지 않음
    if ($container) {
      $container.scrollLeft = 0
      $container.addEventListener('scrollend', handleScrollEnd)
    }
    return () => {
      $container?.removeEventListener('scrollend', handleScrollEnd)
    }
  }, [])

  return (
    <div>
      <h3>
        #3. 이미지 슬라이드
        <sub> 페이지네이션이 추가된 이미지 슬라이드</sub>
      </h3>

      <ImageSlideContainer ref={wrapperRef}>
        <ImageSlide3Ul ref={containerRef}>
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
        </ImageSlide3Ul>
        <NavLeft onClick={move('left')} />
        <NavRight onClick={move('right')} />
      </ImageSlideContainer>
      <Pagination
        totalPages={dataLength}
        currentIndex={currentIndex}
        visibleCount={7}
        handleMove={moveToIndex}
      />
    </div>
  )
}

export default ImageSlide3
