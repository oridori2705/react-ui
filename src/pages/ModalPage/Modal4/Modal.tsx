import { MouseEvent, ReactNode, RefObject } from 'react'
import {
  CloseButton,
  ModalContentContainer,
  ModalFooterContainer,
  ModalHeaderContainer
} from '../Modal1/Modal1.styled'
import { Title } from '../Modal2/Modal2.styled'
import { StyledDialog } from './Modal4.styled'

const Modal = ({
  modalRef,
  hideOnClickOutside = false,
  children,
  hide,
  className
}: {
  modalRef: RefObject<HTMLDialogElement>
  hideOnClickOutside?: boolean
  children: ReactNode
  hide: () => void
  className?: string
}) => {
  const handleClose = () => {
    hide()
  }

  const handleClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (hideOnClickOutside && modalRef.current === e.target) {
      handleClose()
    }
  }

  return (
    <StyledDialog
      className={className}
      ref={modalRef}
      onClick={handleClick}>
      {children}
    </StyledDialog>
  )
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

const ModalContent = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => (
  <ModalContentContainer className={className}>
    {children}
  </ModalContentContainer>
)

const ModalFooter = ({ children }: { children: ReactNode }) => (
  <ModalFooterContainer>{children}</ModalFooterContainer>
)

Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
