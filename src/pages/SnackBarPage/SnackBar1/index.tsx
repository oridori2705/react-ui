import UiExplanation from '@/components/UiExplanation'
import { data } from '../data'
import { ListItemContainer, StyledButton } from './SnackBar.styled'
import SnackbarContextProvider from './SnackBarContextProvider'
import { useSetSnackbar } from './snackBarContext'

const ListItem = ({
  id,
  name,
  index
}: {
  id: string
  name: string
  index: number
}) => {
  const { createSnackbar } = useSetSnackbar()

  const handleClick = () => {
    createSnackbar(
      `snackbar_${id}`,
      <p>
        {index + 1}. {name}
      </p>
    )
  }

  return (
    <ListItemContainer id={id}>
      #{index + 1}{' '}
      <StyledButton onClick={handleClick}>스낵바 띄우기</StyledButton>
    </ListItemContainer>
  )
}

const Snackbar1 = () => {
  return (
    <>
      <SnackbarContextProvider>
        <h2>스낵바</h2>
        <h3>
          #1. SnackBar<sub>Context API + useReducer를 이용한 스낵바</sub>
        </h3>
        {data.map((item, index) => (
          <ListItem
            {...item}
            key={item.id}
            index={index}
          />
        ))}
      </SnackbarContextProvider>
      <UiExplanation>
        <p>- Context API와 useReducer을 이용해 스낵바 기능을 구현했습니다.</p>
        <p>- Context와 useReducer를 이용해 스낵바를 관리합니다.</p>
        <p>
          - 모든 스낵바를 관리하는 SnackBarContext와 스낵바의 추가 및 제거를
          담당하는 SnackBarSetContext가 존재합니다.
        </p>
        <p>- 스낵바의 데이터가 모두 함께 관리됩니다.</p>
        <p>
          - 스낵바 내부에 setTimeout을 넣어주고 스낵바가 생성될 때 실행됩니다.
          일정시간이 지나면 DOM에서 제거하기 위해 로직이 실행됩니다.
        </p>
        <p>
          - 스낵바는 open - enter - show - exit - remove 순으로 6번의 렌더링이
          발생합니다.
        </p>
        <p>- Mouse Hover시 스낵바가 사라지지 않고 유지됩니다.</p>
        <br />

        <h3>장점</h3>
        <p>- 스낵바 데이터들이 한 번에 관리되므로 추가 확장 시 용이합니다.</p>
        <p>- 예를 들어 스낵바 갯수를 제한할 수 있습니다.</p>
        <br />

        <h3>단점</h3>
        <p>- Context Provider를 꼭 사용해줘야 합니다.</p>
        <p>- 6번의 렌더링이 발생합니다.</p>
      </UiExplanation>
    </>
  )
}

export default Snackbar1
