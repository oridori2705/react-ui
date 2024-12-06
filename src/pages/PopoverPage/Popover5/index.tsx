import { useRef, useState } from 'react'

import { data } from '../data'
import {
  MenuItem,
  PopoverButton,
  PopoverList,
  PopoverListItem
} from '../Popover.styled'
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
      <MenuPopover
        opened={menuOpened}
        close={() => toggleMenu(false)}
        wrapperRef={buttonRef}>
        <MenuItem>스레드의 댓글</MenuItem>
        <MenuItem>메시지 전달</MenuItem>
        <MenuItem>나중을 위해 저장</MenuItem>
        <MenuItem>읽지 않음으로 표시</MenuItem>
        <MenuItem>삭제</MenuItem>
      </MenuPopover>
    </PopoverListItem>
  )
}

const Popover5 = () => {
  return (
    <ViewportContextProvider>
      <div>
        <h2>팝오버</h2>
        <h3>
          #2. React<sub>CreatePortal을 이용한 방식 + 단점 개선</sub>
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

export default Popover5
