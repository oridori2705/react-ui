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
  const { snackbar, open } = useSnackBar(
    <p>
      {index + 1}. {name} 스낵바 알림
    </p>
  )

  return (
    <ListItemContainer id={id}>
      #{index + 1} <StyledButton onClick={open}>스낵바 띄우기</StyledButton>
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
    </>
  )
}

export default Snackbar2
