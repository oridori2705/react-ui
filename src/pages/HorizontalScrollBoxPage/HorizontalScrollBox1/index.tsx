import { useRef } from 'react'
import data from '../data'
import ForwardedScrollBox from './ScrollBoxComponent'
import LazyImageComponent3 from '@/pages/LazyImagePage/LazyImage3/LazyComponent3'
import UiExplanation from '@/components/UiExplanation'
import {
  StyledCode,
  StyledStrong,
  StyledStrongNegative
} from '@/components/UiExplanation/UiExplanation.styled'

export const Item = ({
  id,
  description,
  imgUrl
}: {
  id: string
  description: string
  imgUrl: string
}) => (
  <div data-id={id}>
    <LazyImageComponent3
      src={imgUrl}
      width={250}
      height={400}
    />
    <span>{description}</span>
  </div>
)

const HorizontalScrollBox1 = () => {
  const ref = useRef()
  return (
    <>
      <h3>
        #1. 횡 스크롤 박스
        <sub> IntersectionObserver + scroll</sub>
      </h3>

      <ForwardedScrollBox
        list={data}
        Item={Item}
        ref={ref}
      />
      <UiExplanation>
        <p>
          1.
          <StyledStrong>
            좌우 버튼은 IntersectionObserver를 이용해 보임/숨김 처리
          </StyledStrong>
          를 하고,
          <StyledStrong>
            버튼 클릭시 이동은 scrollIntoView()를 이용해서 구현
          </StyledStrong>
          했습니다.
        </p>
        <p>
          2. 해당 기능을 재사용할 때 내부 아이템을 구성하는
          <StyledStrong>Item 컴포넌트를 만들어 Props로 전달</StyledStrong>
          해야하고, 해당 Item 컴포넌트의
          <StyledStrong>data 또한 Props로 전달</StyledStrong>해야합니다.
        </p>
        <p>
          3. ref와 useImperativeHandle이용해서 scrollFocus라는 메서드를 상위에서
          사용할 수 있게 했습니다.(인자로 전달된 index로 이동할 수 있는 기능)
        </p>
        <p>
          4. 각 요소를 클릭시 이벤트를 일으킬 수 있도록 handleItemClick함수를
          props로 내려줄 수 있도록 했습니다.
        </p>
        <p>
          5. wrapperClassName이라는 Props로 해당 횡 스크롤 박스의 wrapper의
          css스타일을 지정할 수 있도록 했습니다.
        </p>
        <br />
        <p>
          <StyledStrongNegative>개선할 점</StyledStrongNegative>
        </p>
        <p>
          - 합성 컴포넌트 패턴을 사용해서 Props로 내부 아이템을 형성 시키는
          방법보다 더 범용성있도록 구현할 수 있지 않을까? 생각했습니다.
        </p>
        <p>
          - 좌우 버튼을 꼭 intersectionObserver를 통해서 보임/숨김처리를
          해야하는 것인지 고민되었습니다.
        </p>
        <br />
        <p>
          <StyledStrongNegative>주의할 점</StyledStrongNegative>
        </p>
        <p>
          - 만약 버튼 이동시 scroll-behavior: smooth가 동작하지 않는다면
          <StyledCode>설정 - 접근성 - 시각 효과</StyledCode>에서
          <StyledCode>애니메이션 효과</StyledCode>를 켜야 잘 동작한다.
        </p>
        <p>
          - Window11이 되면서 Window10보다 애니메이션 기능이 많아짐에 따라
          성능저하가 발생될 위험이 많다고 한다. 그래서 애니메이션 끄기 기능이
          있는 것.
        </p>
      </UiExplanation>
    </>
  )
}
export default HorizontalScrollBox1
