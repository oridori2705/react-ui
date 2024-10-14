import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

interface SpinnerProps {
  width?: number
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -124;
  }
`

export const StyledSpinner = styled.svg<SpinnerProps>`
  animation: ${rotate} 2s linear infinite;

  circle {
    stroke: #96e4ff;
    stroke-linecap: round;
    stroke-width: 5;
    width: ${width => `${width}px`};
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`
