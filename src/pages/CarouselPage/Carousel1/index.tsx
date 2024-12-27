import UiExplanation from '@/components/UiExplanation'
import data from '../data'
import CarouselComponent1 from './CarouselComponent1'
import { StyledStrong } from '@/components/UiExplanation/UiExplanation.styled'

const Carousel1 = () => {
  return (
    <div>
      <h3>
        #1. Carousel
        <sub> currentIndex + 하나의 요소만 보이는 상태 + 애니메이션</sub>
      </h3>
      <CarouselComponent1 images={data} />
      <UiExplanation>
        <p>
          - 하나의 슬라이드 아이템이 보여지고, 우측 또는 좌측으로 슬라이드할 때
          해당되는 아이템을 애니메이션으로 불러오는 방식입니다.
        </p>
        <p>
          - 쉽게 말해서 슬라이드할 때 다음 요소가 애니메이션으로 나타나는
          것입니다.
        </p>
        <p>
          - currentIndex라는 상태를 가지고, 모든 슬라이드 아이템은 ref에
          index순으로 저장해놓습니다.
        </p>
        <p>
          - 우측 또른 좌측 슬라이드시 다음 nextIndex로 ref에 저장해놓은 아이템에
          접근해서 다음 아이템을 애니메이션으로 보여줍니다.
        </p>
        <br />
        <h3>단점</h3>
        <p>
          - 모바일 환경에서 터치 슬라이드가 되지 않습니다. (
          <StyledStrong>scroll</StyledStrong> 또는
          <StyledStrong>터치이벤트</StyledStrong>를 추가해서 해결해야 함)
        </p>
        <p>
          - 만약 <StyledStrong>scroll</StyledStrong>을 이용한 슬라이드를 할 때는
          해당 방식보다는 복제된 슬라이드 아이템을 이어놓아 보여주는 방식이
          적합합니다.
        </p>
        <p>
          - 만약 <StyledStrong>터치이벤트</StyledStrong>를 이용한 슬라이드를 할
          때는 한 번의 터치에 한 번의 슬라이드만 가능하도록 해야합니다.
        </p>
      </UiExplanation>
    </div>
  )
}

export default Carousel1
