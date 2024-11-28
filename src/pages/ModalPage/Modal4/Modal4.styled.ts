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
  inset: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border: 1px solid #242424;
  border-radius: 6px;
  background-color: #fff;
  padding: 0;
  overflow: hidden;
  transition: opacity 0.5s;
  animation: ${popOut} 0.3s ease forwards;

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
