import UiExplanation from '@/components/UiExplanation'
import data from '../data'
import CarouselComponent3 from './CarouselComponent3'

const Carousel3 = () => {
  return (
    <div>
      <CarouselComponent3
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
      </CarouselComponent3>
      <UiExplanation>
        <p>
          - ChildrenNode에 접근해서 scroll-snap-align 속성, 크기 등을 강제로
          적용하고, 클릭 + 터치 이벤트를 추가한 방식입니다.
        </p>
        <p>- 기존 방식들보다 범용성이 높습니다.</p>
        <p>- 터치 슬라이드가 가능합니다.</p>
        <br />
        <h3>단점</h3>
        <p>
          - Carousel은 계속해서 회전해야하는데 현재는 하나의 리스트만
          나열됩니다.
        </p>
        <p>- 이후 방식에서 이어 붙이는 방식을 이용해 개선해보려고 합니다.</p>
      </UiExplanation>
    </div>
  )
}

export default Carousel3
