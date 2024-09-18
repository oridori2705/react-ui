import { useEffect, useRef, useState } from 'react'

import {
  LineClampButtonMore,
  LineClampContainer,
  LineClampText,
  LineClampTextClone
} from '../lineClamp1/lineClamp.styled'
import { LineClampProps } from '../lineClamp1/LineClampCanvas'

const LineClampedClone = ({ text, lineToShow = 3 }: LineClampProps) => {
  const cloneRef = useRef<HTMLDivElement>(null)
  const elemRef = useRef<HTMLDivElement>(null)
  const [isClamped, setIsClamped] = useState(true)
  const [fullHeight, setFullHeight] = useState(0)

  useEffect(() => {
    if (elemRef.current && cloneRef.current) {
      const lineHeight = parseInt(getComputedStyle(elemRef.current).lineHeight)
      const cloneHeight = cloneRef.current.offsetHeight

      setIsClamped(Math.floor(cloneHeight / lineHeight) > lineToShow)
      setFullHeight(elemRef.current.scrollHeight)
    }
  }, [lineToShow])

  const toggleClamping = () => {
    setIsClamped(prev => !prev)
  }

  return (
    <LineClampContainer>
      <LineClampTextClone ref={cloneRef}>{text}</LineClampTextClone>
      <LineClampText
        fullHeight={fullHeight}
        isClamped={isClamped}
        ref={elemRef}
        lineToShow={lineToShow}>
        {text}
      </LineClampText>

      {elemRef.current &&
        lineToShow *
          1.67 *
          parseFloat(getComputedStyle(elemRef.current).fontSize) <
          fullHeight && (
          <LineClampButtonMore
            isClamped={isClamped}
            onClick={toggleClamping}
          />
        )}
    </LineClampContainer>
  )
}

export default LineClampedClone
