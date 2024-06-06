import { useEffect, useRef } from 'react'
import data from '../data'
import { AccordionContainer } from './Accordion.styled'

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
    </>
  )
}

export default Accordion7
