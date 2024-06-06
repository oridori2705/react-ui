import {
  AccordionDescription,
  AccordionItemInput,
  AccordionItemLi,
  AccordionLabel
} from './Accordion.styled'

const AccordionItem = ({
  id,
  title,
  description,
  initialChecked
}: {
  id: string
  title: string
  description: string
  initialChecked: boolean
}) => {
  return (
    <AccordionItemLi key={id}>
      <AccordionItemInput
        type="radio"
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <AccordionLabel htmlFor={id}>{title}</AccordionLabel>
      <AccordionDescription>{description}</AccordionDescription>
    </AccordionItemLi>
  )
}
export default AccordionItem
