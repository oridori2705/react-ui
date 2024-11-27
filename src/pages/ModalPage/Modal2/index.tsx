import { ReactNode, useState } from 'react'
import useModal from './useModal'
import Modal from './Modal'
import ModalRoot from './ModalRoot'

const Modal2 = () => {
  const { opened, openModal, closeModal } = useModal()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)
  return (
    <div>
      <h2>Modal</h2>
      <h3>
        #2. React<sub>CreatePortal + 커스텀 훅을 이용한 방법</sub>
      </h3>
      <button onClick={openModal}>확인모달열기</button>
      {confirmed ? '✅' : '❌'}
      <ConfirmModal
        opened={opened}
        confirmed={confirmed}
        onConfirm={() => {
          setConfirmed(true)
          closeModal()
        }}
        onCancel={() => {
          setConfirmed(false)
          closeModal()
        }}
        hide={closeModal}>
        <p>확인/취소를 눌러주세요.</p>
      </ConfirmModal>

      <ModalRoot />
    </div>
  )
}

export default Modal2

export const ConfirmModal = ({
  opened,
  children,
  confirmed,
  onConfirm,
  onCancel,
  hide
}: {
  opened: boolean
  children: ReactNode
  confirmed: boolean | null
  onConfirm: () => void
  onCancel: () => void
  hide: () => void
}) => {
  return (
    <Modal
      opened={opened}
      hide={hide}
      hideOnClickOutside>
      <Modal.Header
        title={'ConfirmModal'}
        hide={hide}
      />
      <Modal.Content>{children}</Modal.Content>
      <p>
        확인 유무:
        {confirmed ? '✅' : '❌'}
      </p>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  )
}

//단점: <ModalRoot/>로 Modal을 띄워줄 요소를 사용자가 직접 명시해야합니다. 사라지는 애니메이션을 적용하기가 까다롭습니다.
//장점: 사용하기가 간단합니다.
