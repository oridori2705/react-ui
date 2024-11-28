import styled from '@emotion/styled'
import { ModalContextProvider } from './ModalContextProvider'
import { AlertTrigger, ConfirmTrigger, FormTrigger } from './ModalTrigger'
import UiExplanation from '@/components/UiExplanation'
const Modal1 = () => {
  return (
    <>
      <h2>Modal</h2>
      <h3>
        #1. React<sub>context API를 이용한 방법</sub>
      </h3>
      <ModalContextProvider>
        <Container>
          <AlertTrigger
            id="1"
            text="경고"
          />
          <ConfirmTrigger id="3">
            <p>확인 아니면 취소를 눌러주세요.</p>
          </ConfirmTrigger>

          <ConfirmTrigger id="4">
            <>
              <h1>1 중첩 모달 테스트입니다.</h1>
              <ConfirmTrigger id="5">
                <>
                  <h2>2 중첩 모달 테스트입니다.</h2>
                  <ConfirmTrigger id="6">
                    <p>확인 아니면 취소를 눌러주세요.</p>
                  </ConfirmTrigger>
                </>
              </ConfirmTrigger>
            </>
          </ConfirmTrigger>
          <FormTrigger id="7" />
        </Container>
      </ModalContextProvider>
      <UiExplanation>
        <p>- Context API를 이용해 Modal을 구현했습니다.</p>
        <p>
          - Map 객체를 이용해 Modal 데이터를 관리함으로써 관리 로직이
          간단해졌습니다.
        </p>
        <p>- Modal이 열리면 body의 스크롤이 되지 않도록 기능 구현 했습니다.</p>
        <br />
        <h3>장점</h3>
        <p>
          - Modal 데이터가 Context에서 모두 관리되기 때문에 Modal의 갯수에 따른
          설정을 추가할 때 용이합니다.(ex.스크롤 방지 기능)
        </p>
        <p>
          - Modal이 나타날 공간인 ModalRoot와 같은 부분은 개발자가 따로 선언해줄
          필요가 없습니다.
        </p>
        <br />

        <h3>단점</h3>
        <p>- Context Provider를 꼭 사용해줘야 합니다.</p>
        <p>
          - 상태 공유가 되지 않습니다.(ex.부모에서 관리되는 상태와 열린 Modal
          내부의 상태가 서로 불일치){' '}
        </p>
      </UiExplanation>
      <PlaceHolderDiv />
    </>
  )
}

export default Modal1

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
export const PlaceHolderDiv = styled.div`
  height: 3000px;
`
