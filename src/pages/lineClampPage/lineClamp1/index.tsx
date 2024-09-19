import styled from '@emotion/styled'
import data from '../data'

import LineClampCanvas from './LineClampCanvas'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrong
} from '../../../components/UiExplanation/UiExplanation.styled'

const LineClamp1 = () => {
  return (
    <>
      <h3>
        #1. React<sub>canvas를 이용한 방법 - 3줄 말줄임</sub>
      </h3>
      {data.map((text, i) => (
        <TempContainer key={i}>
          <LineClampCanvas
            text={text}
            lineToShow={3}
          />
        </TempContainer>
      ))}
      <UiExplanation>
        <p>
          - <StyledCode>font-size</StyledCode>와
          <StyledCode>font-family</StyledCode>를 가져와{' '}
          <StyledStrong>canvas</StyledStrong>를 이용해 텍스트의 크기를 측정하고
        </p>
        <p>
          여러 줄 문장을 <StyledCode>\n</StyledCode> 으로 나누고, 문장의{' '}
          <StyledCode>width</StyledCode>를 현재 문장을 담고있는 요소의{' '}
          <StyledCode>offsetWidth</StyledCode>로 나눠서 몇 줄을 나타내고 있는지
          알아냅니다.
        </p>
        <p>
          - 알아낸 줄 수를 이용해서 말 줄임에 포함되는지 확인하는 방법입니다.
        </p>
        <br />
        <p>
          기존에는 <StyledCode>-webkit-line-clamp</StyledCode>만을 이용해서
          <StyledCode>-webkit-line-clamp</StyledCode>에 적용한 값과 비교해서
          <StyledCode>isClamped</StyledCode>상태를 관리하면 되었지만
        </p>
        <p>
          <StyledStrong>transition 효과를 적용하기 위해</StyledStrong>{' '}
          line-height, scrollHeight를 이용해 각 문장의 열림/닫힘 높이를 계산해서
          명시적으로 지정해주었습니다.
        </p>
        <br />
        <p>
          - 만약 transition을 주기 위해서 %를 이용하면 부모요소의 높이에
          의존하게 됩니다.
        </p>
        <p>
          - 그렇게 되면 부모 요소의 높이는 어떻게든 px같은 단위로 고정된 크기를
          갖고 있어야 하위에서 % 단위로 transition 효과가 가능해집니다.
        </p>
        <p>
          - 하지만 여러 줄 문장의 높이는 데이터에 따라 다르므로 이 조건에 맞춰서
          적용하기에는 부적합하다고 판단했고, 각 text 데이터의 height를 직접
          계산해서 transition 효과가 나타나도록 했습니다.
        </p>
        <br />
        <p>
          - 결과적으로 처음에는 0px, 이후 계산이 완료되면
          <StyledStrong>lineClamp 최소 높이</StyledStrong> 또는
          <StyledStrong>text 데이터의 높이</StyledStrong>로 설정됩니다.
        </p>
        <p>
          이는 lineClamp 최소높이보다 text 데이터의 높이가 더 적을 때를 위한
          것입니다.( ex) lineClamp는 3인데 한 줄 문장일 경우)
        </p>
        <p>
          - 그리고 펼치기 버튼을 클릭하면 height가 text 데이터의 높이로
          설정됩니다.
        </p>
        <br />
        <p>
          - 추가로 resize 이벤트 시 lineClamp가 재계산 되도록 기능을
          추가했습니다.
        </p>
        <p>
          - 또한 기존에 line-height가 고정되는 문제점을 개선해서 해당 lineClamp
          컴포넌트 사용 시 부모요소의 line-height에 따라 계산이 되도록
          구현했습니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default LineClamp1

export const TempContainer = styled.div`
  position: relative;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  line-height: 1.67; //자유롭게 수정해도 변화가 LineClamp에 적용됨
`

export const TestDiv = styled.div<{ isClicked: boolean }>`
  width: 100px;
  height: ${({ isClicked }) => (isClicked ? `100%` : `100px`)};
  background: red;
  transition: height 2s;
`
