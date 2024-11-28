import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const modalRootStyle = css`
  #modalRoot > div:last-child {
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border: 1px solid #242424;
  border-radius: 6px;
  background-color: #fff;
`

export const ModalHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .title {
    margin: 0 20px;
    flex-grow: 1;
  }
`

export const CloseButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border: 0;
  padding: 0;
  background-color: transparent;
  text-align: center;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 0;
    border-top: 2px solid #333;
    transform-origin: 50% 1px;
    left: 10px;
    top: 19px;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`

export const ModalContentContainer = styled.div`
  padding: 20px;
`

export const ModalFooterContainer = styled.div`
  padding: 10px 20px;
  text-align: right;
`
