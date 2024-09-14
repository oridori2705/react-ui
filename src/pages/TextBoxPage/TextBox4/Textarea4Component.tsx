import {
  KeyboardEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'
import {
  CloneTextarea,
  StyledTextarea,
  TextareaContainer
} from '../TextBox1/TextBox1.styled'

interface Textarea4ComponentProps {
  minRow: number
  maxRow: number
  handleSubmit: () => void
}

const Textarea4Component = forwardRef(
  ({ minRow, maxRow, handleSubmit }: Textarea4ComponentProps, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const cloneRef = useRef<HTMLTextAreaElement>(null)

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          return
        } else {
          event.preventDefault()
          handleSubmit()
        }
      }
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          getValue() {
            if (!textareaRef.current) return
            return textareaRef.current.value
          }
        }
      },
      []
    )

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
      <TextareaContainer>
        <CloneTextarea
          ref={cloneRef}
          rows={1}
          readOnly
        />
        <StyledTextarea
          placeholder="텍스트를 입력하고 제출하면 입력한 텍스트가 출력됩니다."
          onKeyDown={handleKeyDown}
          ref={textareaRef}
          rows={minRow}
        />
      </TextareaContainer>
    )
  }
)

Textarea4Component.displayName = 'Textarea4Component'

export default Textarea4Component
