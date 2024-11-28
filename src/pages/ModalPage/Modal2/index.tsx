import { ReactNode, useState } from 'react'
import useModal from './useModal'
import Modal from './Modal'
import ModalRoot from './ModalRoot'
import { PlaceHolderDiv } from '../Modal1'
import UiExplanation from '@/components/UiExplanation'

const Modal2 = () => {
  return (
    <div>
      <h2>Modal</h2>
      <h3>
        #2. React<sub>CreatePortal + 커스텀 훅을 이용한 방법</sub>
      </h3>
      <ConfirmTrigger>
        <p> 1.중첩모달입니다.</p>
        <ConfirmTrigger>
          <p> 2.중첩모달입니다.</p>
        </ConfirmTrigger>
      </ConfirmTrigger>

      <ModalRoot />
      <UiExplanation>
        <p>- CreatePortal + useModal 커스텀 훅을 이용해 구현했습니다.</p>
        <p>- 사용법과 내부 로직이 간단합니다.</p>
        <p>- 개발자가 따로 ModalRoot를 호출해 줘야 합니다.</p>
        <br />
        <h3>장점</h3>
        <p>- 간단한 사용법과 내부 로직</p>
        <p>- ContextAPI와 달리 상태가 실시간으로 공유됩니다.</p>
        <br />

        <h3>단점</h3>
        <p>- ModalRoot를 호출해 줘야 합니다.</p>
        <p>
          - 사라지는 애니메이션을 적용하기가 까다롭습니다.(현재 사라지는
          애니메이션은 적용이 안됨)
        </p>
        <p> - Modal의 열림/닫힘이 state로 관리되기 때문</p>
      </UiExplanation>
      <PlaceHolderDiv />
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
  const { opened, openModal, closeModal } = useModal()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <p>
        확인 유무:
        {confirmed ? '✅' : '❌'}
      </p>
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
        {children}
      </ConfirmModal>
    </>
  )
}
