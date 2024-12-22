import UiExplanation from '@/components/UiExplanation'
import data from '../data'
import CarouselComponent2 from './CarouselComponent2'

const Carousel2 = () => {
  return (
    <div>
      <CarouselComponent2 images={data}></CarouselComponent2>
      <UiExplanation>
        <p>
          - 모든 슬라이드 아이템이 나열되어있는 상태에서 currentIndex를 이용해
          슬라이드할 때 translateX를 이용해 슬라이드하는 방식입니다.
        </p>
        <p>- 이때 3D 효과가 추가되었습니다.</p>
        <p>
          - 이미지 너비와는 상관없이 슬라이드 거리 값이 계산되므로 편리합니다.
        </p>
        <br />
        <h3>단점</h3>
        <p>- 모바일 환경에서 터치 슬라이드는 되지 않습니다.</p>
        <p>
          - 만약 이미지 너비가 600px라면 그에 맞는 공간이 주어져야
          합니다.(그렇지않으면 배치가 올바르게 되지 않음)
        </p>
      </UiExplanation>
    </div>
  )
}

export default Carousel2
