import { SerializedStyles, css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimationClassName } from './SnackBarItem'

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

const animationStyles: Record<AnimationClassName, SerializedStyles> = {
  enter: css`
    animation: ${rightMove} 500ms ease forwards;
  `,
  exit: css`
    animation: ${leftMove} 500ms ease forwards;
  `
}

export const SnackbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 10%;

  margin-bottom: 24px;
`

export const ListItemContainer = styled.span`
  display: inline-block;
  margin: 10px;
`
export const SnackbarItemContainer = styled.div<{
  animationClassName: AnimationClassName[]
}>`
  position: relative;
  margin: 0 0 0.5rem 0;
  display: flex;
  height: 4rem;
  align-items: center;
  width: 700px;
  height: 100px;
  @media (max-width: 768px) {
    width: 400px;
  }
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${({ animationClassName }) =>
    animationClassName.map(className => animationStyles[className])}
`

export const Title = styled.h2`
  color: black;
  font-weight: bold;
`

const progress = keyframes`
     0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`

export const ProgressBar = styled.div<{
  iconColor: string
  duration: number
  paused: boolean
}>`
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
  animation-play-state: ${({ paused }) => (paused ? 'paused' : '')};
`

export const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: transparent;
  border-radius: 9999px;
  width: 100%;
  height: 4px;
`

export const ContentWrapper = styled.div`
  padding-left: 0.5rem;
`

export const IconWrapper = styled.div<{ iconColor: string }>`
  background-color: ${({ iconColor }) => css`
    ${iconColor}
  `};
  border-radius: 50%;
`

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #004494;
  }
`
