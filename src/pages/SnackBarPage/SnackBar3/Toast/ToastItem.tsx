'use client'

import { useState } from 'react'

import Icon from '@/components/Icon'
import { Toast } from './type'
import useTimeout from './useTimeout'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

interface ToastItemProps extends Toast {
  onDone: () => void
}

const ToastItem = ({ message, iconId, duration, onDone }: ToastItemProps) => {
  const [show, setShow] = useState(true)

  const iconColor = {
    'check-solid': '#47D764',
    'warn-solid': '#ff355b',
    'info-solid': '#2F86EB'
  }
  const iconHeader = {
    'check-solid': 'Success',
    'warn-solid': 'Warning',
    'info-solid': 'Info'
  }

  useTimeout(() => {
    setShow(false)
    setTimeout(() => onDone(), 400)
  }, duration)

  return (
    <ToastContainer show={show}>
      <ProgressBarContainer>
        <ProgressBar
          iconColor={iconColor[iconId]}
          duration={duration}
        />
      </ProgressBarContainer>
      <IconWrapper iconColor={iconColor[iconId]}>
        <Icon id={iconId} />
      </IconWrapper>
      <ContentWrapper>
        <Title>{iconHeader[iconId]}</Title>
        <Message>{message}</Message>
      </ContentWrapper>
    </ToastContainer>
  )
}

export default ToastItem

const ToastContainer = styled.div<{ show: boolean }>`
  position: relative;
  margin: 0 0 0.5rem 0;
  display: flex;
  height: 4rem;
  align-items: center;
  width: 280px;
  @media (min-width: 768px) {
    width: 400px;
  }
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${({ show }) =>
    show
      ? css`
          ${rightMove} ease
    forwards 0.4s
        `
      : css`
          ${leftMove} ease
    forwards 0.4s
        `};
`

const ProgressBar = styled.div<{ iconColor: string; duration: number }>`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  transform-origin: left;
  transform: translateX(-100%);
  animation: ${() => css`
    ${progress} linear forwards 0.4s
  `};
  animation-duration: ${({ duration }) => css`
    ${duration}ms
  `};
  background-color: ${({ iconColor }) => css`
    ${iconColor}
  `};
`

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: transparent;
  border-radius: 9999px;
  width: 100%;
  height: 4px;
`

const ContentWrapper = styled.div`
  padding-left: 0.5rem;
  padding-top: 0.5rem;
`

const IconWrapper = styled.div<{ iconColor: string }>`
  background-color: ${({ iconColor }) => css`
    ${iconColor}
  `};
  border-radius: 50%;
`

const rightMove = keyframes`
    0% {
      transform: translateX(-70%);
    }
    70% {
      transform: translateX(40%);
    }
    100% {
      transform: translateX(0);
    }
  `

const leftMove = keyframes`
    0% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(40%);
    }
    100% {
      transform: translateX(-200%);
    }
  `

const progress = keyframes`
     0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`

const Title = styled.h2`
  color: black;
  font-weight: bold;
`

const Message = styled.p`
  color: black;
  font-size: 0.875rem;
  width: 230px;
  @media (min-width: 768px) {
    width: 350px;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
