import { ReactNode, useState } from 'react'
import useModal from './useModal'
import Modal from './Modal'
import { PlaceHolderDiv } from '../Modal1'
import UiExplanation from '@/components/UiExplanation'

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
      <UiExplanation>
        <p>- Modal 두 번째 방법에서 존재하던 단점을 개선했습니다.</p>
        <p>
          - Modal 컴포넌트에서 애니메이션 상태 isAnimating을 하나 더 관리해
          애니메이션이 정상적으로 보이도록 했습니다.
        </p>
        <p>- createPortal의 두 번째 인자를 document.body로 설정했습니다.</p>
        <p>- ESC 키다운 시 모달이 닫히도록 했습니다.</p>
        <br />
        <h3>장점</h3>
        <p>
          - 애니메이션이 정상적으로 작동합니다. setTimeout이 아니므로 버그가 날
          가능성이 적습니다.
        </p>
        <p>- 따로 ModalRoot를 호출하지 않아도 됩니다.</p>
        <p>- ESC 키다운 기능을 추가해 사용자 경험을 높였습니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - 만약 애니메이션을 수행하는 open,close 중에 state변화가 있으면
          애니메이션이 나타나지 않습니다.
        </p>
        <p>
          - ex.모달이 닫히면서 useState의 상태가 변화하면 애니메이션이
          동작하지않습니다.
        </p>
      </UiExplanation>
      <PlaceHolderDiv />
    </div>
  )
}

export default Modal3

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
