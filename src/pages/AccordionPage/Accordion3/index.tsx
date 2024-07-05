import { useState } from 'react'

import data from '../data'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'
import UiExplanation from '../../../components/UiExplanation'
import { StyledCode, StyledStrong, StyledStrongNegative, StyledStrongPositive } from '../../../components/UiExplanation/UiExplanation.styled'


const Accordion3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }
  return (
    <>
      <h3>
        3. React - Accordion
        <sub> CSS로 아코디언 컴포넌트 만들기 + transition 추가</sub>
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
          <p>두 번째 방법의 <StyledCode>display:none</StyledCode> 방법을 제외하고, <StyledStrong>max-height를 이용해서 요소를 숨김/보임 처리</StyledStrong>를 했습니다.</p>
          <p>이를 통해서 <StyledStrongPositive>transition 효과가 적용</StyledStrongPositive>되도록 했습니다.</p>
          <p>하지만 현재 <StyledStrongNegative>max-height를 이용해서 transition 효과를 주다보니 이질적인 느낌</StyledStrongNegative>이 있습니다.</p> 
          <p>이는 description 데이터의 높이가 각각 모두 다르므로 생기는 현상이라 css의 한계라고 판단했습니다.</p>
          
      </UiExplanation>
    </>
  )
}

export default Accordion3
