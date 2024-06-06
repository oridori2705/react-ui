import { useState } from 'react'

import data from '../data'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'

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
    </>
  )
}

export default Accordion2
