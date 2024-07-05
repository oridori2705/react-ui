import data from '../data'

import UiExplanation from '../../../components/UiExplanation'

import {
  Item,
  TabMenu5Container,
  TabMenu5Description,
  TabMenu5Title,
  TabMenuInput
} from './TabMenu5.styled'

const TabItem = ({
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
    <Item key={id}>
      <TabMenuInput
        type="radio"
        name={'tabmenu'}
        id={id}
        defaultChecked={initialChecked}
      />
      <TabMenu5Title htmlFor={id}>{title}</TabMenu5Title>
      <TabMenu5Description>{description}</TabMenu5Description>
    </Item>
  )
}

const TabMenu5 = () => {
  return (
    <>
      <h3>
        #3. React<sub>한 li 안에 title/desc 모두 있게 처리</sub>
      </h3>
      <TabMenu5Container>
        {data.map((d, i) => (
          <TabItem
            {...d}
            key={d.id}
            initialChecked={i === 0}
          />
        ))}
      </TabMenu5Container>
      <UiExplanation>d</UiExplanation>
    </>
  )
}

export default TabMenu5
