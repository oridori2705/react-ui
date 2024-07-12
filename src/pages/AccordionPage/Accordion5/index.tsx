import UiExplanation from '../../../components/UiExplanation'
import { StyledCode, StyledStrong, StyledStrongPositive } from '../../../components/UiExplanation/UiExplanation.styled'
import data from '../data'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'

const Accordion5 = () => {
  return (
    <>
      <h3>
        #5. React<sub>html input(radio)로 처리</sub>
      </h3>
      <AccordionContainer>
        {data.map((d, i) => (
          <AccordionItem
            {...d}
            key={d.id}
            initialChecked={i === 0}
          />
        ))}
      </AccordionContainer>
      <UiExplanation>
        <p><StyledStrong>html의 input태그의 radio 타입을 이용</StyledStrong>해서 아코디언 기능을 구현했습니다.</p>
        <p><StyledCode>input:checked </StyledCode>를 이용해서 <StyledCode>max-height</StyledCode> 값을 주는, css처리를 통해 아코디언이 열리고 닫히는 기능을 구현했습니다.</p>
        <p>이를 통해서 <StyledStrongPositive>내부 상태를 가지지 않아도 되고</StyledStrongPositive>, <StyledStrongPositive>transition 효과도 온전하게 부여</StyledStrongPositive>할 수 있습니다.</p>
        <p>개인적으로 마음에 든 구현 방법입니다.</p> 
      </UiExplanation>
    </>
  )
}

export default Accordion5
