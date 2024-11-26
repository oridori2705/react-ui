import { useEffect, useRef, useState } from 'react'
import { Snackbar } from './useSnackBar'
import Icon from '@/components/Icon'
import {
  ContentWrapper,
  IconWrapper,
  ProgressBar,
  ProgressBarContainer,
  SnackbarItemContainer
} from './SnackBar.styled'

const iconColor = {
  'check-solid': '#47D764',
  'warn-solid': '#ff355b',
  'info-solid': '#2F86EB'
}

export type AnimationClassName = 'enter' | 'exit'

const SnackBarItem = ({
  status,
  iconId,
  duration,
  progressPaused,
  children,
  onMouseEnter,
  onMouseLeave
}: Snackbar) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [animationClassName, setAnimationClassName] = useState<
    AnimationClassName[]
  >([])

  useEffect(() => {
    setAnimationClassName(status === 'open' ? ['enter'] : ['exit'])
  }, [status])

  return (
    <SnackbarItemContainer
      ref={elemRef}
      animationClassName={animationClassName}
      className={animationClassName.join(' ')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <ProgressBarContainer>
        <ProgressBar
          paused={progressPaused}
          iconColor={iconColor[iconId]}
          duration={duration}
        />
      </ProgressBarContainer>
      <IconWrapper iconColor={iconColor[iconId]}>
        <Icon
          fill="white"
          id={iconId}
        />
      </IconWrapper>
      <ContentWrapper>
        <div>{children}</div>
      </ContentWrapper>
    </SnackbarItemContainer>
  )
}

export default SnackBarItem
