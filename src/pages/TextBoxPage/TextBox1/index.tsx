import { ChangeEvent, useState } from 'react'
import { measureLines } from '../../../utils'
import {
  RootContainer1,
  StyledTextarea,
  TextareaContainer
} from './TextBox1.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TextBox1 = () => {
  const [text, setText] = useState('')
  const [lines, setLines] = useState(3)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const elem = e.target
    const val = elem.value
    const lines = Math.min(Math.max(measureLines(elem, val), 3), 15)
    setText(val)
    setLines(lines)
  }

  return (
    <>
      <h3>
        #1. React<sub>controlled패턴 / canvas활용</sub>
      </h3>
      <RootContainer1>
        <TextareaContainer>
          <StyledTextarea
            onChange={handleChange}
            rows={lines}
            value={text}
            placeholder="입력해보세요!"
          />
        </TextareaContainer>
      </RootContainer1>
      <UiExplanation>
        <p>
          - Textarea를{' '}
          <StyledStrongPositive>제어 컴포넌트 패턴을 이용</StyledStrongPositive>
          해서 <StyledCode>rows</StyledCode> 값을 자동으로 조정하는 기능입니다.
        </p>
        <p>
          - 최소 3 줄의 텍스트 박스 크기가 조정되고, 최대 15줄까지 가능하도록
          했습니다.
        </p>
        <p>
          - 제어 컴포넌트 패턴이기 때문에{' '}
          <StyledStrongNegative> 입력마다 렌더링</StyledStrongNegative>이
          일어납니다.
        </p>
      </UiExplanation>
    </>
  )
}
export default TextBox1
