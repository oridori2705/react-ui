import UiExplanation from '@/components/UiExplanation'
import { StyledButton } from '../SnackBar1/SnackBar.styled'
import Toast from './Toast'
import { StyledCode } from '@/components/UiExplanation/UiExplanation.styled'

const SnackBar3 = () => {
  const { show: show1 } = Toast()
  const { show: show2 } = Toast()

  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #3. 스낵바<sub>createRoot + 싱글톤 패턴 활용 + 3번 렌더링</sub>
      </h3>
      <div>
        <StyledButton
          onClick={() => show1('로그인이 필요한 서비스입니다.', 'warn-solid')}>
          버튼
        </StyledButton>
        <StyledButton
          onClick={() => show2('로그인 되었습니다.', 'check-solid')}>
          버튼
        </StyledButton>
      </div>
      <UiExplanation>
        <p>
          - createRoot를 통해 스낵바를 렌더링할 공간을 만들고, 싱글톤 패턴으로
          스낵바 생성이 겹치지 않도록 했습니다.
        </p>
        <p>- 렌더링이 show - hide - remove로 3번의 렌더링만 수행합니다.</p>
        <p>
          - Toast()를 통해 어디서든 호출 가능하지만 싱글톤 패턴을 통해 하나의
          스낵바 배열안에서 관리됩니다.
        </p>
        <p>
          - 싱글톤 패턴을 위해 createToastInstance 변수를 전역에 선언해 메모리에
          남아있을 수 있는 단점이 존재합니다.
        </p>

        <br />

        <h3>장점</h3>
        <p>
          - <StyledCode>const {`show`} = Toast()</StyledCode> 로 간단하게 사용
          가능합니다.
        </p>
        <p>- 개발자는 별도의 환경을 세팅하지 않아도 됩니다.</p>
        <p>- 3번의 렌더링만 수행합니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - 스낵바 데이터 공유를 위해 싱글톤 패턴을 사용했습니다. 이로 인해 전역
          변수가 메모리에 남아있을 수 있습니다.
        </p>
        <p>
          - 해당 방법에는 Mouse Hover시 스낵바가 사라지지 않는 기능이 존재하지
          않습니다.
        </p>
        <p>
          - createRoot를 사용한 부분이 문제가 될 수도 있습니다.(createPortal로는
          불가능)
        </p>
      </UiExplanation>
    </>
  )
}

export default SnackBar3
