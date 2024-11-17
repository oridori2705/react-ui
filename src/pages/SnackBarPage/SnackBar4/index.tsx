import UiExplanation from '@/components/UiExplanation'
import { data } from '../data'
import {
  ListItemContainer,
  SnackbarWrapper,
  StyledButton
} from './SnackBar.styled'
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
  const { snackbar, open } = useSnackBar(
    'check-solid',
    3000,
    <p>
      {index + 1}. {name}
    </p>
  )

  return (
    <ListItemContainer id={id}>
      #{index + 1} <StyledButton onClick={open}>스낵바 띄우기</StyledButton>
      {snackbar}
    </ListItemContainer>
  )
}

const SnackBar4 = () => {
  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #4. SnackBar<sub>확장된 useSnackBar</sub>
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
          - 기존의 useSnackBar에 스낵바 시간을 나타내는 ProgressBar를
          추가했습니다.
        </p>
        <p>
          - Mouse Hover로 스낵바가 사라지지 않게 한다면 ProgressBar도 같이 멈춰
          시각적으로 확인 가능합니다.
        </p>
        <p>- check, warn, info 아이콘 사용이 가능합니다.</p>

        <br />

        <h3>장점</h3>
        <p>- ProgressBar와 Icon 추가로 스타일이 더 세련됩니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - 여전히 사용할 때 id가 &quot;snackBarRoot&quot; 인 컴포넌트가 필수인
          것을 개발자가 인지해야 합니다.
        </p>
        <p>- 여전히 6번의 렌더링을 수행합니다.</p>
      </UiExplanation>
    </>
  )
}

export default SnackBar4
