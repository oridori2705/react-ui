import styled from '@emotion/styled'
import data from '../data'

import LineClampCanvas from './LineClampCanvas'

const LineClamp1 = () => {
  return (
    <>
      <h3>
        #1. React<sub>canvas를 이용한 방법 - 3줄 말줄임</sub>
      </h3>
      {data.map((text, i) => (
        <TempContainer key={i}>
          <LineClampCanvas
            text={text}
            lineToShow={3}
          />
        </TempContainer>
      ))}
    </>
  )
}

export default LineClamp1

export const TempContainer = styled.div`
  position: relative;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  line-height: 1.67; //자유롭게 수정해도 변화가 LineClamp에 적용됨
`
