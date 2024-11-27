import { ReactNode, SyntheticEvent } from 'react'
import { useSetModals } from './ModalContext'
import {
  CloseButton,
  InnerContainer,
  ModalContainer,
  ModalContentContainer,
  ModalFooterContainer,
  ModalHeaderContainer,
  modalRootStyle
} from './Modal1.styled'
import { Global } from '@emotion/react'

const Modal = ({
  id,
  hideOnClickOutside = false,
  children
}: {
  id: string
  hideOnClickOutside?: boolean
  children: ReactNode
}) => {
  const { closeModal } = useSetModals()
  const closeThis = () => closeModal(id)
  const stopPropagation = (e: SyntheticEvent) => e.stopPropagation()

  return (
    <>
      <Global styles={modalRootStyle} />
      <ModalContainer onClick={hideOnClickOutside ? closeThis : undefined}>
        <InnerContainer onClick={stopPropagation}>{children}</InnerContainer>
      </ModalContainer>
    </>
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
      <div className="title">{title}</div>
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
