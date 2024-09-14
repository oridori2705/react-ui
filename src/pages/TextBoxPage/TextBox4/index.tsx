import { useRef, useState } from 'react'
import {
  BubbleContainer,
  BubbleText,
  InputSubmitButton,
  RootContainer,
  TextInputContainer
} from './TextBox4.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrong
} from '../../../components/UiExplanation/UiExplanation.styled'
import Textarea4Component from './Textarea4Component'

const TextBox4 = () => {
  const ref = useRef<{ getValue: () => string }>(null)
  const [text, setText] = useState('')

  const handleClickSubmit = () => {
    if (!ref.current) return
    const textBoxValue = ref.current.getValue()
    setText(textBoxValue)
  }

  return (
    <>
      <h3>
        #4. React
        <sub>상위 컴포넌트에서 값 접근 / useImperativeHandle 훅 사용</sub>
      </h3>
      <RootContainer>
        {text && (
          <BubbleContainer>
            <BubbleText>{text}</BubbleText>
          </BubbleContainer>
        )}
        <TextInputContainer>
          <Textarea4Component
            minRow={3}
            maxRow={10}
            ref={ref}
            handleSubmit={handleClickSubmit}
          />
          <InputSubmitButton
            type="button"
            onClick={handleClickSubmit}>
            제출
          </InputSubmitButton>
        </TextInputContainer>
      </RootContainer>
      <UiExplanation>
        <p>
          <StyledStrong>Textarea 3번째 방법을 기반</StyledStrong>으로 기능을
          추가했습니다.
        </p>
        <p>
          1. 상위 컴포넌트에서 값을 가져올 수 있도록 하위 textarea의 ref에
          <StyledCode>useImperativeHandle</StyledCode> 훅을 사용해 접근했습니다.
        </p>
        <p>
          2. 키보드 Enter를 눌러서 form 제출이 가능하도록 handleSubmit 함수를
          props로 받을 수 있게 했습니다.
        </p>
        <p>
          3. Enter는 제출을 하도록 했으므로 shift + Enter를 통해 줄바꿈을 할 수
          있도록 했습니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default TextBox4
