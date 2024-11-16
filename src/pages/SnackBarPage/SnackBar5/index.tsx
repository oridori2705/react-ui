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

const SnackBar5 = () => {
  return (
    <>
      <h2>스낵바</h2>
      <h3>
        #5. SnackBar
        <sub>렌더링이 6번 일어나는 문제점을 해결한 스낵바</sub>
      </h3>
      {data.map((item, index) => (
        <ListItem
          {...item}
          key={item.id}
          index={index}
        />
      ))}
      <SnackbarWrapper id="snackbarRoot" />
    </>
  )
}

export default SnackBar5
