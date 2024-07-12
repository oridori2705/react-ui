import { useState } from 'react'

import data from '../data'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'
import UiExplanation from '../../../components/UiExplanation'
import { StyledCode, StyledStrong, StyledStrongNegative, StyledStrongPositive } from '../../../components/UiExplanation/UiExplanation.styled'


const Accordion2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }
  return (
    <>
      <h3>
        1. React - Accordion
        <sub> CSS로 아코디언 컴포넌트 만들기</sub>
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
        <p>useState를 사용해서 <StyledStrongNegative>내부 상태가 존재</StyledStrongNegative>하고, 조건부 렌더링이 아닌 css의 <StyledStrong>display속성을 이용해 숨김/보임 처리</StyledStrong>를 했습니다.</p>
        <p>첫 번째 방법인 조건부 렌더링과 다르게 모든 description 데이터가 DOM에 존재하므로 <StyledStrongPositive>SEO에 적합</StyledStrongPositive>합니다.</p>
        <p>하지만 <StyledCode>display:none</StyledCode>에서 <StyledCode>display:block</StyledCode>으로 되기 때문에 <StyledStrongNegative>transition 효과를 적용하지 못합니다.</StyledStrongNegative></p>
      </UiExplanation>
    </>
  )
}

export default Accordion2
