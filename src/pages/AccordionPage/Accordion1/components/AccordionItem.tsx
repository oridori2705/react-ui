import {
  AccordionDescription,
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
  return (
    <AccordionItemLi
      current={current}
      key={id}>
      <AccordionTab
        current={current}
        onClick={toggle}>
        {title}
      </AccordionTab>
      {current ? (
        <AccordionDescription>{description}</AccordionDescription>
      ) : null}
    </AccordionItemLi>
  )
}

export default AccordionItem
