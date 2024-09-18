import { useEffect, useRef, useState } from 'react'
import { measureLines } from '../../TextBoxPage/utils'
import {
  LineClampButtonMore,
  LineClampContainer,
  LineClampText
} from './lineClamp.styled'

export interface LineClampProps {
  text: string
  lineToShow?: number
}

const LineClampCanvas = ({ text, lineToShow = 3 }: LineClampProps) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [isClamped, setIsClamped] = useState(true)
  const [fullHeight, setFullHeight] = useState(0)

  useEffect(() => {
    if (text && elemRef.current) {
      const measuredLines = measureLines(elemRef.current, text)
      setIsClamped(measuredLines > lineToShow)
      setFullHeight(elemRef.current.scrollHeight)
    }
  }, [text, lineToShow])

  const toggleClamping = () => {
    setIsClamped(prev => !prev)
  }
  return (
    <LineClampContainer>
      <LineClampText
        fontSize={
          elemRef.current
            ? parseFloat(getComputedStyle(elemRef.current).fontSize)
            : 16
        }
        fullHeight={fullHeight}
        isClamped={isClamped}
        ref={elemRef}
        lineToShow={lineToShow}>
        {text}
      </LineClampText>

      {elemRef.current && measureLines(elemRef.current, text) > lineToShow && (
        <LineClampButtonMore
          isClamped={isClamped}
          onClick={toggleClamping}
        />
      )}
    </LineClampContainer>
  )
}

export default LineClampCanvas
