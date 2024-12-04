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
          #1. React<sub>컨텐츠 내부에서 그대로 렌더링</sub>
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
