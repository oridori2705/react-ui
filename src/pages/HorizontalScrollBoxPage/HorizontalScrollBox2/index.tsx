import LazyImageComponent3 from '@/pages/LazyImagePage/LazyImage3/LazyComponent3'
import ScrollBox from './ScrollBoxComponent2'
import data from '../data'
import UiExplanation from '@/components/UiExplanation'
import {
  StyledCode,
  StyledStrong,
  StyledStrongPositive
} from '@/components/UiExplanation/UiExplanation.styled'

const HorizontalScrollBox2 = () => {
  return (
    <>
      <h3>#2. React/합성 컴포넌트 패턴</h3>

      <ScrollBox isSetScrollBar={false}>
        {data.map((item, index) => (
          <ScrollBox.Wrapper
            key={item.id}
            index={index}>
            <div>
              <LazyImageComponent3
                src={item.imgUrl}
                width={250}
                height={400}
              />
              <span>{item.description}</span>
            </div>
          </ScrollBox.Wrapper>
        ))}
      </ScrollBox>

      <UiExplanation>
        <p>
          - 횡 스크롤 박스 첫 번째 방법에서 내부의 요소에 스타일이나 onClick
          등의 기능을 보다
          <StyledStrongPositive>
            자유롭게 적용할 수 있도록 합성 컴포넌트 패턴
          </StyledStrongPositive>
          으로 리팩토링했습니다.
        </p>
        <p>
          - <StyledStrong>스크롤바를 숨김/보임 처리</StyledStrong>할 수 있도록
          <StyledCode>isSetScrollBar</StyledCode>를 Props로 받을 수 있게
          했습니다.
        </p>
        <p>- 양쪽에 그라데이션을 추가했습니다.</p>
        <br />
        <p>
          <StyledStrongPositive>사용 방법</StyledStrongPositive>
        </p>
        <p>
          - 해당 기능은{' '}
          <StyledCode>
            {'<'}ScrollBox{'>'}
          </StyledCode>
          하위에 꼭{' '}
          <StyledCode>
            {'<'}ScrollBox.Wrapper
            {'>'}
          </StyledCode>
          를 사용해서 데이터를 나열해야합니다.
        </p>
        <p>
          - <StyledCode>index Props</StyledCode>를 내려줘서 각 아이템이
          구분되도록 해야합니다.(순수한 index값이면 됨)
        </p>
        <StyledCode>
          {`<ScrollBox>
  {data.map((item, index) => (
    <ScrollBox.Wrapper index={index}>
      {데이터 나열..}
    </ScrollBox.Wrapper>
  ))}
</ScrollBox>`}
        </StyledCode>
      </UiExplanation>
    </>
  )
}
export default HorizontalScrollBox2
