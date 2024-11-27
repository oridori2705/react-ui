import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

interface ModalOverlayAndContentProps {
  isOpen: boolean
}

interface ModalContentProps extends ModalOverlayAndContentProps {}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.99;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 0.99;
  }
  to {
    opacity: 0;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
`

export const ModalOverlay = styled.div<ModalOverlayAndContentProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.5s forwards;
`

export const ModalContent = styled.div<ModalContentProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #242424;
  border-radius: 6px;
  background-color: #fff;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 70%;

  overflow-y: auto;
  -ms-overflow-style: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.5s forwards;
`
