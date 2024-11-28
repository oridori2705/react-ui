import { ReactNode, useState } from 'react'
import useDialogModal from './useDialogModal'
import { AlertModal, ConfirmModal, FormModal } from './ModalDefaultComponent'
import { PlaceHolderDiv } from '../Modal1'
import UiExplanation from '@/components/UiExplanation'

const Modal4 = () => {
  return (
    <div>
      <h2>Modal</h2>
      <h3>
        #3. React
        <sub>Dialog 사용법 + 애니메이션</sub>
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
        <p>- Dialog를 사용해 Modal을 구현한 방법입니다.</p>
        <p>- 애니메이션도 정상적으로 작동하게 설정했습니다.</p>

        <p></p>
        <br />
        <h3>장점</h3>
        <p>- 사용방식, 로직, 애니메이션 로직이 간단합니다.</p>
        <p>- 기본적으로 ESC키다운 기능이 추가되어 있습니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - Modal이 열릴 때 body의 스크롤을 사라지게 하는 방법이
          한정적입니다.(직접 document.querySelectorAll로 접근해야 함)
        </p>
        <p>
          - backdrop 영역이 css로 만들어져있기 때문에 클릭영역이 아니다. 그래서
          따로 기능을 구현해주어야한다.(e.target을 이용한 조건)(Dialog내부에
          inner div를 넣고 stopPropagation하는 방법)
        </p>
        <p>
          애니메이션을 추가하면서 opacity로 요소가 보이지는 않지만 레이아웃을
          차지하게 됩니다.(기존에는 display:none으로 없앨 수 있었습니다.)
        </p>
      </UiExplanation>
      <PlaceHolderDiv />
    </div>
  )
}

export default Modal4

export const AlertTrigger = ({ text }: { text: string }) => {
  const { modalRef, openModal, closeModal } = useDialogModal()

  return (
    <>
      <button onClick={openModal}>얼럿 띄우기</button>
      <AlertModal
        modalRef={modalRef}
        text={text}
        hide={closeModal}
      />
    </>
  )
}

const ConfirmTrigger = ({ children }: { children: ReactNode }) => {
  const { modalRef, openModal, closeModal } = useDialogModal()
  const [confirmed, setConfirmed] = useState<boolean | null>(null)

  return (
    <>
      <button onClick={openModal}>
        확인모달열기 {confirmed ? '확인됨' : '확인안됨'}
      </button>
      <ConfirmModal
        modalRef={modalRef}
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

export const FormTrigger = ({ id }: { id: string }) => {
  const { modalRef, openModal, closeModal } = useDialogModal()

  return (
    <>
      <button onClick={openModal}>폼모달 열기</button>
      <FormModal
        id={id}
        modalRef={modalRef}
        hide={closeModal}
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
          />
          품절
        </label>
      </FormModal>
    </>
  )
}
