// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import data from '../data'
import { TabContainer, TabLi, TabUl } from '../TabMenu1/TabMenu1.styled'
import { TabMenu6Description } from './TabMenu6.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledStrong,
  StyledStrongNegative
} from '../../../components/UiExplanation/UiExplanation.styled'
import { Link } from 'react-router-dom'
import { LinkTagStyle } from '../TabMenu5/TabMenu5.styled'

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

const Description = ({
  id,
  current,
  description,
  toggle
}: {
  id: string
  current: boolean
  description: string
  toggle: () => void
}) => {
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = descRef.current
    if (node) {
      node.addEventListener('beforematch', toggle)
    }
    return () => {
      if (node) node.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  return (
    <TabMenu6Description
      key={id}
      current={current}>
      <div
        className="description"
        ref={descRef}
        HIDDEN={current ? undefined : 'until-found'}>
        {description}
      </div>
    </TabMenu6Description>
  )
}

const TabMenu6 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }

  return (
    <>
      <h3>
        #6. React<sub>ctrl + F 기능이 추가된 탭 메뉴 구현</sub>
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
          <Description
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </TabContainer>
      <UiExplanation>
        <p>
          -
          <StyledStrong>
            ctrl + F 로 요소를 찾으면 자동으로 해당되는 탭이 열리는 기능
          </StyledStrong>
          을 추가했습니다.
        </p>
        <p>
          - 이를 통해서 ctrl + F로 요소를 찾으면 자동으로 해당 탭이 열리게
          됩니다.
        </p>
        <p>
          - 해당 기능은
          <Link to="/accordion/6_r">
            <LinkTagStyle>아코디언</LinkTagStyle>
          </Link>
          의 ctrl + F 기능과 동일하게 적용되었습니다.
        </p>
        <p>
          - 구조는
          <Link to="/tab-menu/2_r">
            <LinkTagStyle>구조는 탭 메뉴 두 번째 방법</LinkTagStyle>과 같습니다.
          </Link>
        </p>
        <p>
          - 추가로 중요한 부분은
          <StyledStrongNegative>
            styled-component에는 hidden 속성이 적용이 안돼서 마지막 탭 메뉴를
            클릭하면 모든 요소가 겹쳐서 출력되는 문제
          </StyledStrongNegative>
          가 생깁니다.
        </p>
        <p>- 그래서 따로 html의 div태그를 사용해서 적용해 줘야 합니다.</p>
      </UiExplanation>
    </>
  )
}

export default TabMenu6
