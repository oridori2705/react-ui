import { StyledButton } from '../SnackBar1/SnackBar.styled'
import Toast from './Toast'

const SnackBar3 = () => {
  const { show: show1 } = Toast()
  const { show: show2 } = Toast()

  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #2. SnackBar<sub>createPortal를 이용한 방법</sub>
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
    </>
  )
}

export default SnackBar3
