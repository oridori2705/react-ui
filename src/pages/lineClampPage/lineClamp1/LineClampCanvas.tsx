import { useEffect, useMemo, useRef, useState } from 'react'
import { debounceFn, measureLines, pxToLineHeightEm } from '../../../utils'
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
  const rootElemRef = useRef<HTMLDivElement>(null)
  const [isClamped, setIsClamped] = useState(true)
  const [fullHeight, setFullHeight] = useState(0)

  const lineHeightEm = useMemo(
    () =>
      rootElemRef.current && getComputedStyle(rootElemRef.current).lineHeight
        ? pxToLineHeightEm({
            pxValue: getComputedStyle(rootElemRef.current).lineHeight,
            elemRef
          })
        : '1.67',
    []
  )

  useEffect(() => {
    const calculateClamping = () => {
      if (text && elemRef.current) {
        const measuredLines = measureLines(elemRef.current, text)

        setIsClamped(measuredLines > lineToShow)
        setFullHeight(elemRef.current.scrollHeight)
      }
    }
    calculateClamping()
    const handleResize = debounceFn(() => {
      calculateClamping()
    }, 100)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [text, lineToShow])

  const toggleClamping = () => {
    setIsClamped(prev => !prev)
  }

  return (
    <LineClampContainer ref={rootElemRef}>
      <LineClampText
        lineHeight={lineHeightEm}
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
