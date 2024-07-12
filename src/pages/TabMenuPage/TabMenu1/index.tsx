import { useState } from 'react'
import data from '../data'
import { TabContainer, TabDescription, TabLi, TabUl } from './TabMenu1.styled'
import UiExplanation from '../../../components/UiExplanation'
import { StyledStrongNegative } from '../../../components/UiExplanation/UiExplanation.styled'

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

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }
  const currentDescription =
    data.find(item => item.id === currentId)?.description || ''

  return (
    <>
      <h3>
        #1. TabMenu<sub>클릭한 탭 메뉴의 내용만 출력하기</sub>
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
        <TabDescription>{currentDescription}</TabDescription>
      </TabContainer>
      <UiExplanation>
        <p>
          -탭 메뉴의 데이터에서 Title 부분만 나열하고, 내부 description 부분은
          클릭한 요소만 출력되게 했습니다.
        </p>
        <p>
          -그래서{' '}
          <StyledStrongNegative>
            현재 DOM요소에도 클릭한 요소만 존재
          </StyledStrongNegative>
          하고 있습니다.
        </p>
        <p>
          -이는 웹 접근성과 ctrl+f로 데이터를 찾을 때 좋지 않을 것이라고
          개인적으로 판단했습니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default TabMenu1
