import { useEffect, useRef, useState } from 'react'
import data from '../data'
import {
  AccordionContainer,
  AccordionItemLi,
  AccordionTab
} from './Accordion.styled'

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle
}: {
  id: string
  title: string
  description: string
  current: boolean
  toggle: () => void
}) => {
  const descRef = useRef<HTMLDivElement>(null)

  //descRef로 연결한 요소에 beforematch라는 이벤트를 등록해야하는데
  //beforematch는 HTML에서 새로 등장한 기능이다 보니 React가 반영을 못하고 있다.
  //그래서 addEventListener로 등록을 해준 것이다.
  useEffect(() => {
    const node = descRef.current
    if (node) {
      node.addEventListener('beforematch', toggle)
    }
    return () => {
      if (node) node.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  //원래 HIDDEN이 아닌 hidden으로 해야하는데 React에는 "until-found"라는 것이 아직 반영이 안되어있어서 없애버리는 문제가 있었는데
  //HTML이 대소문자를 구분안하는 꼼수로 until-found를 인식하게 했다.
  //또한 현재 styled-component는 HIDDEN속성은 되고있지만 beforematch 이벤트가 작동이 안되고 있다.
  //그래서 description부분은 div 태그를 사용해서 구현했다.
  return (
    <AccordionItemLi
      current={current}
      key={id}>
      <AccordionTab
        current={current}
        onClick={toggle}>
        {title}
      </AccordionTab>
      <div
        className="description"
        ref={descRef}
        HIDDEN={current ? undefined : 'until-found'}>
        {description}
      </div>
    </AccordionItemLi>
  )
}

const Accordion6 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)
  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }

  return (
    <>
      <h3>
        #6. React<sub>ctrl+F 검색 가능</sub>
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

export default Accordion6

/* 참고: https://hiddenest.dev/accessible-accordion */
