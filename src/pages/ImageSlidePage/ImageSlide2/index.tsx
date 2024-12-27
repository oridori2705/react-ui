import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import {
  ImageSlideContainer,
  NavLeft,
  NavRight
} from '../ImageSlide1/ImageSlide1.styled'
import data from '../data'
import { useCallback, useRef } from 'react'
import { ImageItem3, ImageSlide3Ul } from './ImageSlide2.styled'
import UiExplanation from '@/components/UiExplanation'
import {
  StyledCode,
  StyledStrongPositive
} from '@/components/UiExplanation/UiExplanation.styled'

type Direction = 'left' | 'right'

const ImageSlide2 = () => {
  const containerRef = useRef<HTMLUListElement>(null)
  const imageWidth = 600

  const move = useCallback(
    (direction: Direction) => () => {
      if (containerRef.current) {
        const container = containerRef.current
        const scrollPosition = container.scrollLeft
        const nextScrollPosition =
          direction === 'right'
            ? scrollPosition + imageWidth
            : scrollPosition - imageWidth
        if (nextScrollPosition > imageWidth * data.length) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        } else {
          container.scrollTo({
            left: nextScrollPosition,
            behavior: 'smooth'
          })
        }
      }
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
      <UiExplanation>
        <p>
          -
          <StyledStrongPositive>
            모바일 터치 슬라이드가 가능하도록 스크롤 기능을 추가
          </StyledStrongPositive>{' '}
          했습니다.
        </p>
        <p>
          - 슬라이드 기능이 scrollTo <StyledCode>{`({ left: x })`}</StyledCode>
          로 기능합니다.
        </p>
        <p>- ref로만 기능합니다.(useState를 사용하지 않아 렌더링 최소화)</p>
        <p>
          - css의 <StyledCode>scroll-snap-type</StyledCode>기능을 이용해
          transition 없이 슬라이드 효과가 나도록 했습니다.
        </p>
        <p>
          - 아이템마다 <StyledCode>scroll-snap-align : start</StyledCode> 속성이
          적용되어있습니다.
        </p>
        <p>
          - 이미지 너비가 미리 주어져야합니다.(이동되어야할 left 값이 상수로
          있어야 함)
        </p>
        <br />

        <h3>단점</h3>
        <p>- 페이지네이션이 구현되지 않았습니다.</p>
        <p>- 현재 가로스크롤이 마우스 휠로 안되는 중(기능은 잘됨)</p>
      </UiExplanation>
    </div>
  )
}

export default ImageSlide2
