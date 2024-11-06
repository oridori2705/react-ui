import { useEffect, useRef, useState } from 'react'
import { SnackbarItemContainer, SnackbarWrapper } from './SnackBar.styled'
import { Snackbar, useSetSnackbar, useSnackbar } from './snackBarContext'

export type AnimationClassName = 'enter' | 'show' | 'exit'

const SnackbarItem = ({
  id,
  isOpen,
  children,
  onMouseEnter,
  onMouseLeave
}: Snackbar) => {
  const { removeSnackbar } = useSetSnackbar()
  const elemRef = useRef<HTMLDivElement>(null)
  const [animationClassName, setAnimationClassName] = useState<
    AnimationClassName[]
  >([])

  const handleAnimationEnd = () => {
    if (elemRef.current?.className.includes('enter')) {
      setAnimationClassName(['show'])
    } else {
      removeSnackbar(id)
    }
  }

  useEffect(() => {
    setAnimationClassName(isOpen ? ['enter'] : ['show', 'exit'])
  }, [isOpen])

  return (
    <SnackbarItemContainer
      animationClassName={animationClassName}
      ref={elemRef}
      className={animationClassName.join(' ')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={handleAnimationEnd}>
      {children}
    </SnackbarItemContainer>
  )
}

const SnackbarRoot = () => {
  const snackbar = useSnackbar()

  return (
    <SnackbarWrapper>
      {snackbar.map(item => (
        <SnackbarItem
          {...item}
          key={item.id}
        />
      ))}
    </SnackbarWrapper>
  )
}

export default SnackbarRoot
