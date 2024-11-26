import styled from '@emotion/styled'
import { ModalContextProvider } from './ModalContextProvider'
import { AlertTrigger, ConfirmTrigger, FormTrigger } from './ModalTrigger'
const Modal1 = () => {
  return (
    <ModalContextProvider>
      <h2>모달</h2>
      <h3>
        #1. React<sub>context API를 이용한 방법법</sub>
      </h3>
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
  )
}

export default Modal1

//단점: 상태 공유가 안됨, Provider 내부에서 사용해야 함
//장점: 모달이 리스트로 관리돼서 Modal 갯수에 따른 설정하기가 편함

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
