import { useState } from 'react'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'
import data from '../data'
import UiExplanation from '../../../components/UiExplanation'
import { StyledStrong, StyledStrongNegative } from '../../../components/UiExplanation/UiExplanation.styled'


const Accordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }
  return (
    <>
      <h3>
        1. React - Accordion
        <sub> 조건부 렌더링으로 아코디언 컴포넌트 만들기</sub>
      </h3>

      <AccordionContainer>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </AccordionContainer>
      <UiExplanation>
        <p>useState를 사용하고, <StyledStrong>조건부 렌더링</StyledStrong>을 통해 요소가 보여지도록 했습니다.</p>
        <p>간단하게 구현이 가능하지만 조건부 렌더링이기 때문에 <StyledStrongNegative >내부 상태가 존재</StyledStrongNegative>해야하고, <StyledStrongNegative>transition 효과가 불가능</StyledStrongNegative>합니다.</p> 
      </UiExplanation>
    </>
  )
}

export default Accordion1
