import { MouseEvent, ReactNode, RefObject } from 'react'
import Modal from './Modal'

export const AlertModal = ({
  modalRef,
  text,
  hide
}: {
  modalRef: RefObject<HTMLDialogElement>
  text: string
  hide: () => void
}) => {
  return (
    <Modal
      modalRef={modalRef}
      hide={hide}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={hide}>확인</button>
      </Modal.Footer>
    </Modal>
  )
}

export const ConfirmModal = ({
  modalRef,
  children,
  confirmed,
  onConfirm,
  onCancel,
  hide
}: {
  modalRef: RefObject<HTMLDialogElement>
  children: ReactNode
  confirmed: boolean | null
  onConfirm: () => void
  onCancel: () => void
  hide: () => void
}) => {
  return (
    <Modal
      modalRef={modalRef}
      hide={hide}
      hideOnClickOutside>
      <Modal.Header
        title={confirmed ? '확인된 컨펌' : '확인안된 컨펌'}
        hide={hide}
      />
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  )
}

export const FormModal = ({
  id,
  modalRef,
  children,
  onSubmit,
  onCancel,
  hide
}: {
  id: string
  children: ReactNode
  modalRef: RefObject<HTMLDialogElement>
  onSubmit?: (formData: FormData) => void
  onCancel?: () => void
  hide: () => void
}) => {
  const formId = `form_${id}`

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    onSubmit?.(data)
    hide()
  }
  const handleCancel = () => {
    onCancel?.()
    hide()
  }

  return (
    <Modal
      modalRef={modalRef}
      hide={hide}>
      <Modal.Header hide={hide} />
      <Modal.Content>
        <form
          id={formId}
          onSubmit={handleSubmit}>
          {children}
        </form>
      </Modal.Content>
      <Modal.Footer>
        <button
          type="submit"
          form={formId}>
          확인
        </button>
        <button
          type="button"
          onClick={handleCancel}>
          취소
        </button>
      </Modal.Footer>
    </Modal>
  )
}
