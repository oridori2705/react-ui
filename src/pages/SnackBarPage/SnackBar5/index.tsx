import UiExplanation from '@/components/UiExplanation'
import { data } from '../data'
import { ListItemContainer, StyledButton } from './SnackBar.styled'
import useSnackBar from './useSnackBar'
import { StyledCode } from '@/components/UiExplanation/UiExplanation.styled'

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
        <sub>기존의 방식에서 존재하던 단점을 해결한 방법</sub>
      </h3>
      {data.map((item, index) => (
        <ListItem
          {...item}
          key={item.id}
          index={index}
        />
      ))}
      <UiExplanation>
        <p>- 스낵바 네 번째 방법에서 존재하는 단점을 해결했습니다.</p>
        <p>
          - <StyledCode>document.body.appendChild() </StyledCode>이용해 id가
          &quot;snackBarRoot&quot; 인 컴포넌트를 따로 만들지 않아도 됩니다.
        </p>
        <p>- 스낵바가 show - hide - remove로 3번의 렌더링만 수행합니다.</p>

        <br />

        <h3>장점</h3>
        <p>- 3번의 렌더링을 수행하는 점</p>
        <p>
          - 따로 id가 &quot;snackBarRoot&quot; 인 컴포넌트를 따로 만들지 않아도
          됩니다.
        </p>
        <br />

        <h3>단점</h3>
        <p>- SnackBarWrapper를 생성하는 코드에서 보이는 명령형 프로그래밍</p>
      </UiExplanation>
    </>
  )
}

export default SnackBar5
