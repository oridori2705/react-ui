import UiExplanation from '@/components/UiExplanation'
import {
  ListItemContainer,
  SnackbarWrapper,
  StyledButton
} from '../SnackBar1/SnackBar.styled'
import { data } from '../data'
import useSnackBar from './useSnackBar'

const ListItem = ({
  id,
  name,
  index
}: {
  id: string
  name: string
  index: number
}) => {
  const { snackbar, open } = useSnackBar(<p>로그인되었습니다.</p>)

  return (
    <ListItemContainer id={id}>
      <StyledButton onClick={open}>스낵바 띄우기</StyledButton>
      {snackbar}
    </ListItemContainer>
  )
}

const Snackbar2 = () => {
  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #2. SnackBar<sub>createPortal를 이용한 방법</sub>
      </h3>
      {data.map((item, index) => (
        <ListItem
          {...item}
          key={item.id}
          index={index}
        />
      ))}
      <SnackbarWrapper id="snackbarRoot" />
      <UiExplanation>
        <p>
          - createPortal을 이용해 useSnackBar 커스텀 훅으로만 스낵바를 만들 수
          있도록 했습니다.
        </p>
        <p>- 각 useSnackBar는 createPortal을 이용해 스낵바를 나타냅니다.</p>
        <p>- 스낵바 첫 번째 방법과 기능은 같습니다.</p>
        <p>- 사용시 id가 &quot;snackBarRoot&quot; 인 컴포넌트가 필수입니다.</p>

        <br />

        <h3>장점</h3>
        <p>- useSnackBar사용으로만 간단하게 사용할 수 있습니다.</p>
        <p>- Provider없이 가능합니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - 사용시 id가 &quot;snackBarRoot&quot; 인 컴포넌트가 필수인 것을
          개발자가 인지해야 합니다.
        </p>
        <p>- 여전히 6번의 렌더링이 발생합니다.</p>
        <p>
          - useSnackBar가 반환한 snackBar 데이터를 꼭 JSX에 명시해야하는
          번거로움이 있습니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default Snackbar2
