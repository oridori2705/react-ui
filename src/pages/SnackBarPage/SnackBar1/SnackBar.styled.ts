import { SerializedStyles, css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { AnimationClassName } from './snackBarRoot'

const enter = keyframes`
  0% {
    transform: translate(0, 50px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const exit = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(0, 50px);
    opacity: 0;
  }
`

const animationStyles: Record<AnimationClassName, SerializedStyles> = {
  enter: css`
    animation: ${enter} 500ms ease-out forwards;
  `,
  show: css`
    transform: translateY(0);
    opacity: 1;
  `,
  exit: css`
    animation: ${exit} 500ms ease-out forwards;
  `
}

export const ListItemContainer = styled.span`
  display: inline-block;
  margin: 10px;
`
export const SnackbarItemContainer = styled.div<{
  animationClassName: AnimationClassName[]
}>`
  display: flex;
  justify-content: center;
  opacity: 0.9;
  margin-top: 20px;
  width: auto;
  min-width: 300px;
  max-width: 680px;
  padding: 16px 20px;
  line-height: 1.5;
  font-size: 1.2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  ${({ animationClassName }) =>
    animationClassName.map(className => animationStyles[className])}
`

export const SnackbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 24px;
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
