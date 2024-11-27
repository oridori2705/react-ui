import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContent, ModalOverlay } from './Modal3.styled'
import {
  CloseButton,
  ModalContentContainer,
  ModalFooterContainer,
  ModalHeaderContainer
} from '../Modal1/Modal1.styled'
import { Title } from '../Modal2/Modal2.styled'

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  width?: number
  height?: number
  close: () => void
}

const mutationObserverOption: MutationObserverInit = {
  childList: true,
  subtree: false
}

const Modal = ({ isOpen, close, children }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(isOpen)
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()
  const ref = useRef<HTMLElement | null>(null)

  const handleAnimationEnd = () => {
    if (!isAnimating) {
      close()
    }
  }

  useEffect(() => {
    let observer: MutationObserver
    ref.current = document.body
    if (ref.current) {
      observer = new MutationObserver(() => {
        const size = ref.current?.childNodes.length || 0
        document.body.classList.toggle('no-scroll', size > 0)
      })
      observer.observe(ref.current, mutationObserverOption)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay
            isOpen={isAnimating}
            onClick={() => setIsAnimating(false)}
            onAnimationEnd={handleAnimationEnd}>
            <ModalContent
              isOpen={isAnimating}
              onClick={stopPropagation}
              onAnimationEnd={handleAnimationEnd}>
              {children}
            </ModalContent>
          </ModalOverlay>
        </>,
        document.body
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

const ModalMainContent = ({ children }: { children: ReactNode }) => (
  <ModalContentContainer>{children}</ModalContentContainer>
)

const ModalFooter = ({ children }: { children: ReactNode }) => (
  <ModalFooterContainer>{children}</ModalFooterContainer>
)

Modal.Header = ModalHeader
Modal.Content = ModalMainContent
Modal.Footer = ModalFooter

export default Modal
