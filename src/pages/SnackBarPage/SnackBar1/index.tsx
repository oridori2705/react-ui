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
  )
}

export default Snackbar1
