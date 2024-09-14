import { useEffect, useRef } from 'react'
import {
  CloneTextarea,
  RootContainer1,
  StyledTextarea,
  TextareaContainer
} from '../TextBox1/TextBox1.styled'

interface Textarea3ComponentProps {
  minRow?: number
  maxRow?: number
}

const Textarea3Component = ({
  maxRow = 6,
  minRow = 3
}: Textarea3ComponentProps) => {
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
          minRow
        ),
        maxRow
      ))
      elem.rows = newRows

      const overflowStyle = newRows >= maxRow ? 'auto' : 'hidden'
      elem.style.overflow = overflowStyle
      cloneElem.style.overflow = overflowStyle
    }

    if (elem) elem.addEventListener('input', updateTextarea)

    return () => {
      if (elem) elem.removeEventListener('input', updateTextarea)
    }
  }, [maxRow, minRow])

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
            rows={minRow}
            placeholder="입력해보세요!"
          />
        </TextareaContainer>
      </RootContainer1>
    </>
  )
}
export default Textarea3Component
