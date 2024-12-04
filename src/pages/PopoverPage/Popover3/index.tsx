import { useRef, useState } from 'react'

import { data } from '../data'
import { PopoverButton, PopoverList, PopoverListItem } from '../Popover.styled'
import MenuPopover from './MenuPopover'

const ListItem = ({
  id,
  title,
  index
}: {
  id: string
  title: string
  index: number
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuOpened, toggleMenu] = useState(false)
  const handleClickButton = () => toggleMenu(true)

  return (
    <PopoverListItem id={id}>
      #{index + 1}. {title}
      <PopoverButton
        onClick={handleClickButton}
        ref={buttonRef}
      />
      {menuOpened && (
        <MenuPopover
          id={index + 1 + ''}
          close={() => toggleMenu(false)}
          wrapperRef={buttonRef}
        />
      )}
    </PopoverListItem>
  )
}

const Popover3 = () => {
  return (
    <>
      <div>
        <h2>팝오버</h2>
        <h3>
          #2. React
          <sub>
            CreatePortal을 이용한 방식 + Context API를 사용하지 않는 방식
          </sub>
        </h3>
        <PopoverList>
          {data.map((item, index) => (
            <ListItem
              {...item}
              index={index}
              key={item.id}
            />
          ))}
        </PopoverList>
      </div>
      <div id="popoverRoot" />
    </>
  )
}

export default Popover3

// useState로 ViewportRect를 계산했더니 6번의 렌더링이 발생한다. -> 요소가 나타날 때 잠깐 크기가 변해버려서 생기는 현상
// 그래서 ref로만 viewportRect데이터를 관리하게 했습니다 -> 이로인해 스크롤하거나 resize시 실시간으로 위치가 변하지 않습니다.(리-렌더링이 발생해야 바뀜)
