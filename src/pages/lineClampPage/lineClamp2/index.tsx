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
    </>
  )
}

export default LineClamp2
