import styled from '@emotion/styled'
import UiExplanation from '../../../components/UiExplanation'
import { StyledCode } from '../../../components/UiExplanation/UiExplanation.styled'
import Tooltip from './TooltipComponent1'

const Tooltip1 = () => {
  return (
    <>
      <h3>
        #1. React<sub>Tooltip 컴포넌트 구현</sub>
      </h3>
      <Container>
        <Tooltip
          arrow={false}
          eventType="focus"
          direction="right"
          tooltipContent="마음껏 입력해보세요!">
          <StyledInput
            type="text"
            placeholder="입력하세요."
          />
        </Tooltip>
        <Tooltip
          arrow={true}
          eventType="hover"
          direction="right"
          tooltipContent="Hello😁">
          <StyledButton className="primary">hover me</StyledButton>
        </Tooltip>
        <Tooltip
          arrow={true}
          eventType="click"
          direction="bottom"
          tooltipContent={
            <div>
              <StyledButton className="primary">Hello😁</StyledButton>
            </div>
          }>
          <StyledButton className="success">click me</StyledButton>
        </Tooltip>
      </Container>

      <UiExplanation>
        <p>
          - 어떤 요소에든 Tooltip을 사용할 수 있는 Tooltip 컴포넌트를
          구현했습니다.
        </p>
        <p>- 아래와 같은 속성을 지정해주어야 합니다.</p>
        <p>
          -<StyledCode> arrow : 화살표 유무 [기본값 true]</StyledCode>
        </p>
        <p>
          -
          <StyledCode>
            direction : tooltip의 위치 top | left | right | bottom 중 선택 가능
            [기본값 top]
          </StyledCode>
        </p>
        <p>
          -
          <StyledCode>
            eventType : click | hover | focus 중 선택 가능 [기본값 hover]
          </StyledCode>
        </p>
        <p>
          -<StyledCode>tooltipText : tooltip에 나타내고 싶은 텍스트</StyledCode>
        </p>
      </UiExplanation>
    </>
  )
}

export default Tooltip1

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  gap: 15px; /* 요소 간의 간격 */
`

export const StyledInput = styled.input`
  outline: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`

export const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.primary {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }

  &.success {
    background-color: #28a745;
    color: white;

    &:hover {
      background-color: #218838;
    }
  }
`
