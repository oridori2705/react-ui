import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'
import ViewportContextProvider from '../../../hooks/viewport/ViewportContext'

import { Container, StyledButton, StyledInput } from '../Tooltip1'
import Tooltip from './TooltipComponent2'

const Tooltip2 = () => {
  return (
    <div>
      <ViewportContextProvider>
        <h3>
          #2. React
          <sub>Tooltip 컴포넌트 구현 / viewport를 계산하는 tooltip</sub>
        </h3>
        <Container>
          <Tooltip
            arrow={false}
            eventType="focus"
            direction="right"
            tooltipText="마음껏 입력해보세요!">
            <StyledInput
              type="text"
              placeholder="입력하세요."
            />
          </Tooltip>
          <Tooltip
            arrow={true}
            eventType="hover"
            direction="right"
            tooltipText="Hello😁">
            <StyledButton className="primary">hover me</StyledButton>
          </Tooltip>
          <Tooltip
            arrow={true}
            eventType="click"
            direction="bottom"
            tooltipText="Hello😁">
            <StyledButton className="success">click me</StyledButton>
          </Tooltip>
        </Container>
      </ViewportContextProvider>
      <UiExplanation>
        <p>
          - Tooltip이
          <StyledStrongPositive>
            현재 Viewport에 따라 자동으로 위치가 조정되는 기능을 추가
          </StyledStrongPositive>
          했습니다.
        </p>
        <p>
          - direction 값을 기준으로 viewport를 계산해서 tooltip을 최적의 위치에
          보여주게 됩니다.
        </p>
        <p>
          - 현재 Viewport를 계산하는 로직은 <StyledCode>Context API</StyledCode>
          로 만들어 추후 <StyledStrongPositive>재사용</StyledStrongPositive>
          가능하도록 했습니다.
        </p>
        <p>
          - 하지만 해당 기능이 추가되려면 Context에 접근하는 Tooltip 컴포넌트와
          그 컴포넌트를 감싸는 Provider를 코드에 작성해줘야 합니다.
          <StyledStrongNegative>(의존성 증가)</StyledStrongNegative>
        </p>
      </UiExplanation>
    </div>
  )
}

export default Tooltip2
