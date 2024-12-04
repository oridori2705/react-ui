import { MouseEvent, useRef, useState } from 'react'
import MenuPopover from './MenuPopover'
import ViewportContextProvider from '@/hooks/viewport/ViewportContext'
import { data } from '../data'
import { PopoverButton, PopoverList, PopoverListItem } from '../Popover.styled'

const ListItem = ({
  id,
  title,
  index
}: {
  id: string
  title: string
  index: number
}) => {
  const [opened, setIsOpened] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (dialogRef.current) {
      dialogRef.current.showModal()
      setIsOpened(true)
    }
  }
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      setIsOpened(false)
    }
  }

  return (
    <PopoverListItem id={id}>
      #{index + 1}. {title}
      <PopoverButton
        onClick={handleClickButton}
        ref={buttonRef}
      />
      <MenuPopover
        id={index + 1 + ''}
        close={closeDialog}
        wrapperRef={buttonRef}
        dialogRef={dialogRef}
        opened={opened}
      />
    </PopoverListItem>
  )
}

const Popover3 = () => {
  return (
    <ViewportContextProvider>
      <div>
        <h2>팝오버</h2>
        <h3>
          #3. React<sub>Dialog를 이용한 방식</sub>
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

export default Popover3

//기존에 dialog에 존재하는 dialog.show를 이용하려했지만 show메서드는 backdrop이 없는 문제와 좌표수정이 어렵고, overflow:hidden에 대응하기 어려워 적합하지 않다고 판단했습니다.
//그래서 showModal() 메서드로 활용하는 방법을 선택했습니다.

//1) 좌표 계산이 어렵지만, overflow:hidden에서 자유롭기 위해서는 결국 absolute 타입이 나은 것 같습니다.
//2) popover에는 dialog show 메소드를 쓰기에 적합하지 않은 듯 합니다.
