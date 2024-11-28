import { ReactNode, useState } from 'react'
import useModal from './useModal'
import Modal from './Modal'

const Modal3 = () => {
  return (
    <div>
      <h2>Modal</h2>
      <h3>
        #3. React
        <sub>
          CreatePortal + 커스텀 훅을 이용한 방법 + 애니메이션 추가 + {'<'}
          ModalRoot/{'>'}불필요
        </sub>
      </h3>
      <ConfirmTrigger>
        <p> 1.중첩모달입니다.</p>
        <ConfirmTrigger>
          <p> 2.중첩모달입니다.</p>
          <ConfirmTrigger>
            <p> 3.중첩모달입니다.</p>
          </ConfirmTrigger>
        </ConfirmTrigger>
      </ConfirmTrigger>
    </div>
  )
}

export default Modal3

//애니메이션가능하게 한 방법
//사용 방식도 간단
//따로 ModalRoot를 선언하지않아도 됨
//ESC를 눌렀을 때 Modal이 닫힘
//단점 : 만약 애니메이션을 수행하는 open,close 중에 state변화가 있으면 애니메이션이 나타나지 않음

export const ConfirmModal = ({
  isOpen,
  children,
  confirmed,
  onConfirm,
  onCancel,
  close
}: {
  isOpen: boolean
  children: ReactNode
  confirmed: boolean | null
  onConfirm: () => void
  onCancel: () => void
  close: () => void
}) => {
  return (
    <Modal
      isOpen={isOpen}
      close={close}>
      <Modal.Header
        title={'ConfirmModal'}
        hide={close}
      />
      <Modal.Content>{children}</Modal.Content>
      <p>
        현재 확인 유무:
        {confirmed ? '✅' : '❌'}
      </p>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  )
}

const ConfirmTrigger = ({ children }: { children: ReactNode }) => {
  const { open, close, isOpen } = useModal()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)

  return (
    <>
      <button onClick={open}>모달 열기</button>
      <p>
        확인 유무:
        {confirmed ? '✅' : '❌'}
      </p>
      <ConfirmModal
        isOpen={isOpen}
        confirmed={confirmed}
        onConfirm={() => {
          close()
          setConfirmed(true)
        }}
        onCancel={() => {
          close()
          setConfirmed(false)
        }}
        close={close}>
        {children}
      </ConfirmModal>
    </>
  )
}
