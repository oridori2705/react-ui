import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const popIn = keyframes`
  0% {
    scale:0
  }
  100% {
    scale:1
  }

`
const popOut = keyframes`
  0% {
    scale:1
  }
  100% {
    scale:0
  }

`

export const StyledDialog = styled.dialog`
  display: block;
  width: 100%;
  height: 100%;
  inset: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  transition: opacity 0.5s;
  animation: ${popOut} 0.3s ease forwards;
  background-color: transparent;

  &::backdrop {
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
  }
  &[open] {
    animation: ${popIn} 0.3s ease forwards;
  }
  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }
`
