import { useCallback, useRef, useState } from 'react'
import {
  ImageItem,
  ImageSlide1Ul,
  ImageSlideContainer,
  NavLeft,
  NavRight
} from './ImageSlide1.styled'
import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import data from '../data'
import UiExplanation from '@/components/UiExplanation'

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
          (direction === 'right' ? prev + 1 : prev - 1 + data.length) %
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
      <h3>
        #1. 이미지 슬라이드
        <sub> React에서 기본적인 이미지 슬라이드 구현</sub>
      </h3>

      <ImageSlideContainer>
        <ImageSlide1Ul
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
        </ImageSlide1Ul>
        <NavLeft onClick={move('left')} />
        <NavRight onClick={move('right')} />
      </ImageSlideContainer>
      <UiExplanation>
        <p>
          - currentIndex로 현재 이미지의 인덱스를 상태로 관리하고, 나머지
          연산자로 반복 순회가 가능하도록 했습니다.
        </p>
        <p>
          - 예를 들어 20개의 이미지( 0 ~ 19 )에서 20번째에 오고 0번째로 갈 때 19
          + 1 + data.length로 40이 되고, 이를 40 % data.length 해서 다시 0번째로
          오게합니다.
        </p>
        <p>
          - 또 예를 들어 0번에서 왼쪽으로 슬라이드하면 20번으로 가야하므로 0 - 1
          + data.length 로 19가 되고, 이를 19 % data.length로 19번째로 오게
          합니다.
        </p>
        <p>- 이미지 너비가 미리 주어져야합니다.(이동되어야할 left 값이 상수로 있어야 함)</p>
        <br />

        <h3>단점</h3>
        <p>- 모바일 터치로 슬라이드가 되지 않습니다.</p>
        <p>- 페이지네이션이 구현되지 않았습니다.</p>
      </UiExplanation>
    </div>
  )
}

export default ImageSlide1
