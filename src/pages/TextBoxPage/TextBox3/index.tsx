import { useEffect, useRef } from 'react'
import {
  CloneTextarea,
  RootContainer1,
  StyledTextarea,
  TextareaContainer
} from '../TextBox1/TextBox1.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrong,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TextBox3 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const cloneRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const elem = textareaRef.current
    const updateTextarea = () => {
      const elem = textareaRef.current
      const cloneElem = cloneRef.current

      if (!elem || !cloneElem) return

      const val = elem.value
      cloneElem.value = val

      const newRows = (elem.rows = Math.min(
        Math.max(
          Math.floor(cloneElem.scrollHeight / cloneElem.clientHeight),
          3
        ),
        6
      ))
      elem.rows = newRows

      const overflowStyle = newRows >= 6 ? 'auto' : 'hidden'
      elem.style.overflow = overflowStyle
      cloneElem.style.overflow = overflowStyle
    }

    if (elem) elem.addEventListener('input', updateTextarea)

    return () => {
      if (elem) elem.removeEventListener('input', updateTextarea)
    }
  }, [])

  return (
    <>
      <h3>
        #3. React<sub>uncontrolled패턴 / 클론 Textarea를 통한 line 계산</sub>
      </h3>
      <RootContainer1>
        <TextareaContainer>
          <CloneTextarea
            ref={cloneRef}
            rows={1}
            readOnly
          />
          <StyledTextarea
            ref={textareaRef}
            rows={3}
            placeholder="입력해보세요!"
          />
        </TextareaContainer>
      </RootContainer1>
      <UiExplanation>
        <p>
          - Textarea에
          <StyledStrongPositive>제어 컴포넌트 패턴을 이용</StyledStrongPositive>
          하고 <StyledStrong>textarea 복사본</StyledStrong>을 만들어 이용한
          방법입니다.
        </p>
        <p>
          -<StyledStrongPositive>화면에 보여지는 textarea</StyledStrongPositive>
          와
          <StyledStrongNegative>
            화면에 보이지 않는 textarea
          </StyledStrongNegative>
          를 만들고,{' '}
          <StyledStrong>
            화면에 보이지 않는 textarea는 입력 값을 받되 rows는 1로 고정
          </StyledStrong>
          됩니다.
        </p>
        <p>
          - 화면에 보이지 않는 textarea에서 text의 한 줄 크기인
          <StyledCode>clientHeight</StyledCode>와 줄 바꿈된 텍스트 데이터의
          높이를 알 수 있는 <StyledCode>scrollHeight</StyledCode>를 가져옵니다.
        </p>
        <p>
          - 이를 통해서 화면에 보이는 textarea는 rows를 계산할 수 잇게 됩니다.
        </p>
        <p>- 또한 maxrow를 넘어가게 되면 스크롤 바가 생기도록 했습니다.</p>
      </UiExplanation>
    </>
  )
}
export default TextBox3
