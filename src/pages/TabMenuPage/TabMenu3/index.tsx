import { useState } from 'react'

import data from '../data'
import {
  TabMenu3Description,
  TabMenu3ItemLi,
  TabMenu3Title,
  TabMenu3Ul
} from './TabMenu3.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TabItem = ({
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
    <TabMenu3ItemLi key={id}>
      <TabMenu3Title
        current={current}
        onClick={toggle}>
        {title}
      </TabMenu3Title>

      <TabMenu3Description current={current}>{description}</TabMenu3Description>
    </TabMenu3ItemLi>
  )
}

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }
  return (
    <>
      <h3>
        #3. React<sub>한 li 안에 title/desc 모두 있게 처리</sub>
      </h3>
      <TabMenu3Ul>
        {data.map(d => (
          <TabItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </TabMenu3Ul>
      <UiExplanation>
        <p>
          -
          <StyledStrongPositive>
            스크린 리더가 의도치않은 순서로 읽는 접근성 문제를 해결
          </StyledStrongPositive>
          하기 위해 DOM 트리를 탭 메뉴의 의도와 일치하도록 기능을 구현했습니다.
        </p>
        <p>
          - 해당 기능을 구현할 때 css 스타일 부분이 조금 어렵게 느껴졌습니다.
        </p>
        <p>
          - 탭요소 5개 혹은 다수의 갯수가 나열되는데 여기서 Description 부분은
          <StyledCode>absolute</StyledCode> 로 겹치도록하고,
          <StyledCode>display:none</StyledCode> 과
          <StyledCode>display:block</StyledCode> 으로 처리했습니다.
        </p>
        <p>
          - 그래서 생긴 문제는 해당 <StyledCode>absolute</StyledCode>로 인해
          border과 border-radius를 하나의 부모요소에서 적용할 수 없었습니다.
        </p>
        <p>
          - 즉 <StyledCode>absolute</StyledCode>는 붕 떠있는 요소이기 때문에
          부모요소의 기준으로 붙어있는 것이지 부모 요소 안에 해당되지않아 border
          자체는 <StyledCode>absolute</StyledCode>가 아닌 부분에만 적용이
          됐습니다.
        </p>
        <p>
          - 어찌됐든 다수의 요소가 순서대로 나열되어야 하기 때문에
          <StyledCode>absolute</StyledCode>는 필수로 적용해야하는 속성입니다.
        </p>
        <p>
          - 현재는 각각 스타일을 주고 이전과 비슷한 스타일을 만들어
          구현했습니다.
        </p>
        <p>
          - 또한 <StyledCode>absolute</StyledCode>이기 때문에 아래에 만약 요소가
          있다면 해당 부분도 고려해야합니다.{' '}
          <StyledStrongNegative>
            고려하지 않으면 탭 메뉴와 겹쳐버리게 됩니다.
          </StyledStrongNegative>
        </p>
      </UiExplanation>
    </>
  )
}

export default TabMenu3
