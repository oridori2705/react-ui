import { ReactNode, useState } from 'react'
import { useSetModals } from './ModalContext'
import { AlertModal, ConfirmModal, FormModal } from './ModalDefaultComponent'
import { StyledButton } from '@/pages/SnackBarPage/SnackBar1/SnackBar.styled'

export const AlertTrigger = ({ id, text }: { id: string; text: string }) => {
  const { openModal } = useSetModals()

  const openAlertModal = () => {
    openModal(
      id,
      <AlertModal
        id={id}
        text={text}
      />
    )
  }
  return (
    <div>
      <StyledButton onClick={openAlertModal}>얼럿 띄우기</StyledButton>
    </div>
  )
}

export const ConfirmTrigger = ({
  id,
  children
}: {
  id: string
  children: ReactNode
}) => {
  const { openModal, closeModal } = useSetModals()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)
  const closeThis = () => closeModal(id)

  const openConfirmModal = () => {
    openModal(
      id,
      <ConfirmModal
        id={id}
        confirmed={confirmed}
        onConfirm={() => {
          setConfirmed(true)
          closeThis()
        }}
        onCancel={() => {
          setConfirmed(false)
          closeThis()
        }}
        hide={closeThis}>
        {children}
      </ConfirmModal>
    )
  }
  return (
    <div>
      <StyledButton onClick={openConfirmModal}>{id}번 모달열기</StyledButton>
      <p>
        {id}번 확인 유무:
        {confirmed ? '✅' : '❌'}
      </p>
    </div>
  )
}

export const FormTrigger = ({ id }: { id: string }) => {
  const { openModal } = useSetModals()
  const openFormModal = () => {
    openModal(
      id,
      <FormModal
        id={id}
        onSubmit={d => {
          // eslint-disable-next-line no-console
          console.log(Array.from(d))
        }}>
        <input
          name="name"
          placeholder="상품명"
        />
        <input
          name="price"
          type="number"
          placeholder="가격"
        />
        <label>
          <input
            name="soldOut"
            type="checkbox"
          />{' '}
          품절
        </label>
      </FormModal>
    )
  }
  return (
    <div>
      <StyledButton onClick={openFormModal}>폼모달 열기</StyledButton>
    </div>
  )
}
