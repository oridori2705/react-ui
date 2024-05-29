import { useState } from 'react'

import data from '../data'
import { AccordionContainer } from './components/Accordion.styled'
import AccordionItem from './components/AccordionItem'

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
      <div>
        <br />
        <hr />
        <p>
          현재 max-height를 이용해서 transition 효과를 주다보니 이질적인 느낌이
          있음{' '}
        </p>
        <p>
          이는 description 데이터의 높이가 각각 모두 다르므로 생기는 현상이라
          css의 한계라고 판단
        </p>
      </div>
    </>
  )
}

export default Accordion3
