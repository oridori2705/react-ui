import { useRef, useState } from 'react'

import { data } from '../data'
import { PopoverButton, PopoverList, PopoverListItem } from '../Popover.styled'
import ViewportContextProvider from '@/hooks/viewport/ViewportContext'
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

const Popover1 = () => {
  return (
    <ViewportContextProvider>
      <div>
        <h2>팝오버</h2>
        <h3>
          #1. React<sub>자식요소에 조건부 렌더링으로 기능하는 방식</sub>
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
    </ViewportContextProvider>
  )
}

export default Popover1

// 단점
// 현재 Popover에는 Modal처럼 레이어가 존재해서 Popover는 하나씩만 나타나게 할 수 있었다.
// 즉, 레이어가 존재하지 않는다면 Popover를 여러개 클릭해서 열 수 있게 되는 것이다.(같은 컴포넌트가 많아짐)

//만약 각 리스트 아이템에 overflow: hidden이 적용되어있다면 Popover가 해당 스타일로 인해 잘려나가는 현상이 생긴다.(내부 자식요소로 존재하게됨으로써 생기는 문제)
