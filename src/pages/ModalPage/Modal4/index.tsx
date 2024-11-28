import { ReactNode, useState } from 'react'
import useDialogModal from './useDialogModal'
import { AlertModal, ConfirmModal, FormModal } from './ModalDefaultComponent'

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
    </div>
  )
}

export default Modal4

//Modal이 열릴 때 body의 스크롤을 사라지게 하는 방법이 한정적이다.
//backdrop 영역이 css로 만들어져있기 때문에 클릭영역이 아니다. 그래서 따로 기능을 구현해주어야한다.(e.target을 이용한 조건)(Dialog내부에 inner div를 넣고 stopPropagation하는 방법)

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
