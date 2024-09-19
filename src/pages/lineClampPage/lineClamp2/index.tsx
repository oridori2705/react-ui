import UiExplanation from '../../../components/UiExplanation'
import { StyledStrong } from '../../../components/UiExplanation/UiExplanation.styled'
import data from '../data'
import { TempContainer } from '../lineClamp1'
import LineClampedClone from './LineClampClone'

const LineClamp2 = () => {
  return (
    <>
      <h3>
        #2. React<sub>clone을 이용한 방법 - 3줄 말줄임</sub>
      </h3>
      {data.map((text, i) => (
        <TempContainer key={i}>
          <LineClampedClone
            text={text}
            lineToShow={3}
          />
        </TempContainer>
      ))}
      <UiExplanation>
        <p>
          - 기존 Element에서{' '}
          <StyledStrong>
            보이지 않지만 데이터만 넣어져 있는 cloneElement를 이용해서 줄 수를
            계산하는 방법
          </StyledStrong>
          을 이용했습니다.
        </p>
        <p>
          - cloneElement는 기본적으로 데이터가 넣어진 상태로 펼쳐져 있습니다.
        </p>
        <p>
          - cloneElement의 펼쳐져 있는 offsetHeight에 기존 element의
          lineHeight를 나눠서 줄 수를 구할 수 있습니다.
        </p>
        <p>- 이를 LineClamp 값과 비교해서 열림/닫힘이 가능해집니다.</p>
        <p>- 추가 기능은 라인클램프 첫 번째 방법과 동일합니다.</p>
      </UiExplanation>
    </>
  )
}

export default LineClamp2
