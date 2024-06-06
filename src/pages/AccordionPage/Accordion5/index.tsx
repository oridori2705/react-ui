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
    </>
  )
}

export default Accordion5
