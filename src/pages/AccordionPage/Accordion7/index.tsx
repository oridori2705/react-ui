import { useEffect, useRef } from 'react'
import data from '../data'
import { AccordionContainer } from './Accordion.styled'
import UiExplanation from '../../../components/UiExplanation'
import { StyledCode } from '../../../components/UiExplanation/UiExplanation.styled'

const AccordionItem = ({
  title,
  description,
  open
}: {
  title: string
  description: string
  open: boolean
}) => {
  const descRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const open = () => descRef.current?.open

    if (descRef.current) {
      descRef.current.addEventListener('beforematch', open)
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', open)
    }
  }, [open])

  return (
    <details
      name="test"
      ref={descRef}
      open={open}>
      <summary>{title}</summary>
      <div className="description">{description}</div>
    </details>
  )
}

const Accordion7 = () => {
  return (
    <>
      <h3>
        #6. React
        <sub>details,summary 태그를 이용한 아코디언</sub>
      </h3>
      <AccordionContainer>
        {data.map((d, i) => (
          <AccordionItem
            {...d}
            key={d.id}
            open={i === 0}
          />
        ))}
      </AccordionContainer>
      <UiExplanation>
        <p> <StyledCode>{`<details>`}</StyledCode>와 <StyledCode>{`<summary>`} </StyledCode>를 이용해 아코디언 기능을 구현했습니다.</p>
        <p> <StyledCode>{`<details>`}</StyledCode>태그와 <StyledCode>{`<summary>`} </StyledCode>태그는 HTML5에서 새로 도입된 태그로, 사용자가 클릭해서 추가 정보를 볼 수 있도록 하는 인터랙티브한 요소를 만들 때 유용합니다.</p>
        <p> 추가로 <StyledCode>{`<details>`}</StyledCode>태그와 <StyledCode>{`<summary>`} </StyledCode>태그를 이용하면 transition 효과를 적용할 때는 기존과 다른 방법을 활용해야합니다.</p>
        <br/>
        <h3>📢transition 적용 방법</h3>
        <p>- 그래서transition효과를 적용하려면 먼저 <StyledCode>details</StyledCode>태그에 <StyledCode>summary</StyledCode>가  보여질 정도의 <StyledCode>height</StyledCode> 또는 <StyledCode>max-height</StyledCode>를 적용합니다..</p>
        <p>- 그럼 <StyledCode>details[open] </StyledCode>이거나  <StyledCode>details:not([open])</StyledCode>이 아닐 때 <StyledCode>summary는</StyledCode> 일단 보이게 됩니다.(0을 적용하면 open아닌 것들은 안보입니다)</p>
        <p>- 그리고 <StyledCode>deatail[open]</StyledCode> 이 되면 <StyledCode>height</StyledCode> 또는 <StyledCode>max-height</StyledCode>를 지정한 높이로 늘려줍니다.</p>
        <p>- 여기서 transition은 <StyledCode>details</StyledCode>태그에 적용해놓으면 됩니다.</p>
      </UiExplanation>
    </>
  )
}

export default Accordion7
