import { useEffect, useMemo, useRef, useState } from 'react'

import {
  LineClampButtonMore,
  LineClampContainer,
  LineClampText,
  LineClampTextClone
} from '../lineClamp1/lineClamp.styled'
import { LineClampProps } from '../lineClamp1/LineClampCanvas'
import { debounceFn, pxToLineHeightEm } from '../../../utils'

const LineClampedClone = ({ text, lineToShow = 3 }: LineClampProps) => {
  const cloneRef = useRef<HTMLDivElement>(null)
  const elemRef = useRef<HTMLDivElement>(null)
  const rootElemRef = useRef<HTMLDivElement>(null)
  const [isClamped, setIsClamped] = useState(true)
  const [fullHeight, setFullHeight] = useState(0)

  const lineHeightEm = useMemo(() => {
    return rootElemRef.current &&
      getComputedStyle(rootElemRef.current).lineHeight
      ? pxToLineHeightEm({
          pxValue: getComputedStyle(rootElemRef.current).lineHeight,
          elemRef
        })
      : '1.67'
  }, [])

  const defaultLineHeightEm = Math.max(Number(lineHeightEm), 1.67)

  const shouldShowButton =
    elemRef.current &&
    lineToShow *
      defaultLineHeightEm *
      parseFloat(getComputedStyle(elemRef.current).fontSize) <
      fullHeight

  useEffect(() => {
    const calculateClamping = () => {
      if (elemRef.current && cloneRef.current) {
        const cloneHeight = cloneRef.current.offsetHeight

        setIsClamped(
          Math.floor(cloneHeight / Number(lineHeightEm)) > lineToShow
        )
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
  }, [lineToShow, lineHeightEm])

  const toggleClamping = () => {
    setIsClamped(prev => !prev)
  }
  return (
    <LineClampContainer ref={rootElemRef}>
      <LineClampTextClone ref={cloneRef}>{text}</LineClampTextClone>
      <LineClampText
        lineHeight={lineHeightEm}
        fullHeight={fullHeight}
        isClamped={isClamped}
        ref={elemRef}
        lineToShow={lineToShow}>
        {text}
      </LineClampText>

      {shouldShowButton && (
        <LineClampButtonMore
          isClamped={isClamped}
          onClick={toggleClamping}
        />
      )}
    </LineClampContainer>
  )
}

export default LineClampedClone
