import UiExplanation from '@/components/UiExplanation'
import data from '../data'
import ImageSlideComponent from './ImageSliedeComponent'

const ImageSlide4 = () => {
  return (
    <div>
      <ImageSlideComponent
        childSize={500}
        groupGap={15}
        useButton>
        {data.map((url, index) => (
          <img
            key={index}
            src={url}
            width="600"
            height="320"
          />
        ))}
      </ImageSlideComponent>
      <UiExplanation>
        <p>
          - ChildrenNode에 접근해서 scroll-snap-align 속성, 크기 등을 강제로
          적용하고, 클릭 + 터치 이벤트를 추가한 방식입니다.
        </p>
        <p>- 기존 방식들보다 범용성이 높습니다.</p>
        <p>- 데스크톱 환경에서도 터치 슬라이드가 가능합니다.</p>
        <br />
        <h3>단점</h3>
        <p>- 터치 슬라이드의 작동 방식이 복잡합니다.</p>
        <p>
          - childrenNode에 접근해서 스타일을 강제로 적용하기 때문에
          사이드이펙트문제가 있을 수 있습니다.
        </p>
      </UiExplanation>
    </div>
  )
}

export default ImageSlide4
