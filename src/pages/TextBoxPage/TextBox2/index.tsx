import { ChangeEvent } from 'react'
import {
  RootContainer1,
  StyledTextarea,
  TextareaContainer
} from '../TextBox1/TextBox1.styled'
import { measureLines } from '../utils'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TextBox2 = () => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const elem = e.target
    const val = elem.value
    const lines = Math.min(Math.max(measureLines(elem, val), 3), 15)
    elem.rows = lines
  }

  return (
    <>
      <h3>
        #2. React<sub>uncontrolled패턴 / canvas 활용</sub>
      </h3>
      <RootContainer1>
        <TextareaContainer>
          <StyledTextarea
            rows={3}
            onInput={handleChange}
            placeholder="입력해보세요!"
          />
        </TextareaContainer>
      </RootContainer1>
      <UiExplanation>
        <p>
          - Textarea를
          <StyledStrongPositive>
            비제어 컴포넌트 패턴을 이용
          </StyledStrongPositive>
          해서 <StyledCode>rows</StyledCode> 값을 자동으로 조정하는 기능입니다.
        </p>
        <p>- event를 textarea값에 접근했습니다.</p>
        <p>
          - <StyledStrongPositive>canvas</StyledStrongPositive>를 이용했습니다.
        </p>
        <p>
          - textarea의 <StyledCode>font-size</StyledCode>와 StyledCode
          <StyledCode>font-family</StyledCode>를 가져와 canvas를 이용해 텍스트의
          크기를 즉정합니다.
        </p>
        <p>
          - 입력한 데이터의 각 줄을 순회합니다. canvas의
          <StyledCode>measureText(text).width</StyledCode>를 이용해서 각 줄의 총
          길이를 구합니다.
        </p>
        <p>
          - 각 줄의 총 길이를 textarea의 <StyledCode>offsetWidth</StyledCode>로
          나눕니다. 그러면 textarea에 작성된 데이터가 얼만큼의 row가 필요한지
          계산됩니다.
        </p>
        <p>
          - 해당 계산을 통해서 <StyledCode>rows</StyledCode> 값을 지정합니다.
        </p>
        <p>
          - canvas를 이용한
          <StyledStrongNegative>
            단점은 textarea의 스크롤 바의 너비나 padding값 등에 영향을 받아
            계산을 정확하게 해야하는 것
          </StyledStrongNegative>
          입니다.
        </p>
        <p>
          - <StyledStrongNegative>계산이 정확하지 않다면</StyledStrongNegative>
          줄바꿈 되었을 때 rows가 정확하게 늘어나지 않습니다.
        </p>
        <p>
          - 현재는 <StyledCode>padding : 0</StyledCode>으로 주고,
          <StyledCode>overflow : hidden</StyledCode>을 줘서 영향을 안받게끔
          했습니다.
        </p>
      </UiExplanation>
    </>
  )
}
export default TextBox2
