import { ReactNode, SyntheticEvent } from 'react'
import { createPortal } from 'react-dom'
import {
  CloseButton,
  InnerContainer,
  ModalContainer,
  ModalContentContainer,
  ModalFooterContainer,
  ModalHeaderContainer,
  modalRootStyle,
  Title
} from '../Modal2/Modal2.styled'
import { Global } from '@emotion/react'

const Modal = ({
  hideOnClickOutside = false,
  children,
  opened,
  hide
}: {
  hideOnClickOutside?: boolean
  children: ReactNode
  opened: boolean
  hide: () => void
}) => {
  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation()

  return opened
    ? createPortal(
        <>
          <Global styles={modalRootStyle} />
          <ModalContainer onClick={hideOnClickOutside ? hide : undefined}>
            <InnerContainer
              show={opened}
              onClick={stopPropagation}>
              {children}
            </InnerContainer>
          </ModalContainer>
        </>,
        document.querySelector('#modalRoot')!
      )
    : null
}

const ModalHeader = ({
  title,
  children,
  hide
}: {
  title?: string
  children?: ReactNode
  hide?: () => void
}) => {
  return (
    <ModalHeaderContainer>
      <Title>{title}</Title>
      {children}
      <CloseButton onClick={hide} />
    </ModalHeaderContainer>
  )
}

const ModalContent = ({ children }: { children: ReactNode }) => (
  <ModalContentContainer>{children}</ModalContentContainer>
)

const ModalFooter = ({ children }: { children: ReactNode }) => (
  <ModalFooterContainer>{children}</ModalFooterContainer>
)

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
