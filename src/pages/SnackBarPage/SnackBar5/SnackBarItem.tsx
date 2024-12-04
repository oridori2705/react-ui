import Icon from '@/components/Icon'
import {
  ContentWrapper,
  IconWrapper,
  ProgressBar,
  ProgressBarContainer,
  SnackbarItemContainer
} from './SnackBar.styled'
import useTimeout from '../../../hooks/useTimeout'
import { Snackbar } from './useSnackBar'
import { useState } from 'react'

const iconColor = {
  'check-solid': '#47D764',
  'warn-solid': '#ff355b',
  'info-solid': '#2F86EB'
}

export type AnimationClassName = 'enter' | 'exit'

const SnackBarItem = ({
  status,
  onDone,
  iconId,
  duration,
  progressPaused,
  children,
  onMouseEnter,
  onMouseLeave
}: Snackbar) => {
  const [show, setShow] = useState(status)

  const { pause, run } = useTimeout(() => {
    setShow(false)
    setTimeout(() => onDone(), 400)
  }, duration)

  return (
    <SnackbarItemContainer
      show={show}
      onMouseEnter={() => {
        onMouseEnter()
        pause()
      }}
      onMouseLeave={() => {
        onMouseLeave()
        run()
      }}>
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
