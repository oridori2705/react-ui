import { useEffect, useRef, useState } from 'react'
import { Snackbar } from './useSnackBar'
import { SnackbarItemContainer } from '../SnackBar1/SnackBar.styled'
import { AnimationClassName } from '../SnackBar1/snackBarRoot'

const SnackBarItem = ({
  status,
  setStatus,
  children,
  onMouseEnter,
  onMouseLeave
}: Snackbar) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [animationClassName, setAnimationClassName] = useState<
    AnimationClassName[]
  >([])

  const handleAnimationEnd = () => {
    if (elemRef.current?.className.includes('enter')) {
      setAnimationClassName(['show'])
    } else {
      setStatus(null)
    }
  }
  useEffect(() => {
    setAnimationClassName(status === 'open' ? ['enter'] : ['show', 'exit'])
  }, [status])

  return (
    <SnackbarItemContainer
      ref={elemRef}
      animationClassName={animationClassName}
      className={animationClassName.join(' ')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={handleAnimationEnd}>
      {children}
    </SnackbarItemContainer>
  )
}

export default SnackBarItem
