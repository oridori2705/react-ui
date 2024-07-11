import { useState } from 'react'
import data from '../data'

import UiExplanation from '../../../components/UiExplanation'
import { TabMenu2Description } from './TabMenu2.styled'
import { TabContainer, TabLi, TabUl } from '../TabMenu1/TabMenu1.styled'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TabItem = ({
  id,
  title,
  current,
  toggle
}: {
  id: string
  title: string
  current: boolean
  toggle: () => void
}) => {
  return (
    <TabLi
      current={current}
      key={id}
      onClick={toggle}>
      {title}
    </TabLi>
  )
}

const TabMenu2 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }

  return (
    <>
      <h3>
        #2. TabMenu
        <sub>탭 요소가 DOM에 존재하고, css를 통해 숨김/보임 처리</sub>
      </h3>
      <TabContainer>
        <TabUl>
          {data.map(d => (
            <TabItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </TabUl>
        {data.map(d => (
          <TabMenu2Description
            key={d.id}
            current={currentId === d.id}>
            {d.description}
          </TabMenu2Description>
        ))}
      </TabContainer>
      <UiExplanation>
        <p>
          -기존에는 탭 내부 description이 DOM에 클릭된 요소 하나만
          존재했었습니다.
        </p>
        <p>
          -
          <StyledStrongNegative>
            탭의 모든 description이 DOM에 존재하지 않게 되는 문제
          </StyledStrongNegative>
          를 해결하기 위해 css에서 <StyledCode>display:none</StyledCode>을
          이용해서 숨김/보임 처리를 했습니다.
        </p>
        <p>
          -이를 통해{' '}
          <StyledStrongPositive>
            {' '}
            DOM에 모든 탭 description 요소가 노출
          </StyledStrongPositive>{' '}
          될 수 있도록 했습니다.
        </p>
        <p>
          -하지만 탭 Title 부분과 description을 나열하기 위해{' '}
          <StyledStrongNegative>map 메서드를 두 번 사용</StyledStrongNegative>
          하게 돱니다.
        </p>
        <p>
          -또한 스크린 리더가 해당 요소를 읽을 때 Title1 - Title2 ... -
          description1 - description2 와 같이{' '}
          <StyledStrongNegative>
            원치않는 순서로 읽게 됩니다.
          </StyledStrongNegative>
        </p>
      </UiExplanation>
    </>
  )
}

export default TabMenu2
