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
import UiExplanation from '@/components/UiExplanation'
import { StyledStrongPositive } from '@/components/UiExplanation/UiExplanation.styled'

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
        <Pagination
          totalPages={dataLength}
          currentIndex={currentIndex}
          visibleCount={7}
          handleMove={moveToIndex}
        />
        <NavLeft onClick={move('left')} />
        <NavRight onClick={move('right')} />
      </ImageSlideContainer>
      <UiExplanation>
        <p>
          -<StyledStrongPositive>페이지네이션 기능을 추가</StyledStrongPositive>
          했습니다.
        </p>
        <p>
          - 보여질 ViewCount를 props로 받고, 현재 위치가 가운데에 위치하도록
          하기 위해 1/2 합니다.
        </p>
        <p>
          - 이후 현재 위치에 1/2한 값을 빼서 보여질 ViewCount의 최솟값을
          구합니다.
        </p>
        <p>
          - 그리고 미리 만들어놓은 indexes배열에 slice()를 이용해 보여질
          ViewCount들을 렌더링합니다.
        </p>
        <p>
          - 이미지 너비가 미리 주어져야합니다.(이동되어야할 left 값이 상수로
          있어야 함)
        </p>
      </UiExplanation>
    </div>
  )
}

export default ImageSlide3
