import { MouseEvent, useRef, useState } from 'react'
import MenuPopover from './MenuPopover'
import { data } from '../data'
import {
  MenuDialogItem,
  MenuDialogList,
  PopoverButton,
  PopoverList,
  PopoverListItem
} from '../Popover.styled'
import UiExplanation from '@/components/UiExplanation'

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
        close={closeDialog}
        wrapperRef={buttonRef}
        dialogRef={dialogRef}
        opened={opened}>
        <MenuDialogList onClick={e => e.stopPropagation()}>
          <MenuDialogItem>#{id}</MenuDialogItem>
          <MenuDialogItem>스레드의 댓글</MenuDialogItem>
          <MenuDialogItem>메시지 전달</MenuDialogItem>
          <MenuDialogItem>나중을 위해 저장</MenuDialogItem>
          <MenuDialogItem>읽지 않음으로 표시</MenuDialogItem>
          <MenuDialogItem>삭제</MenuDialogItem>
        </MenuDialogList>
      </MenuPopover>
    </PopoverListItem>
  )
}

const Popover4 = () => {
  return (
    <>
      <div>
        <h2>팝오버</h2>
        <h3>
          #4. React<sub>Dialog를 이용한 방식</sub>
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
      <UiExplanation>
        <p>- dialog를 이용해 popover를 구현한 방식입니다.</p>
        <p>- 이 또한 두 번째 방법과 동일하게 절대 위치로 style이 계산됩니다.</p>

        <br />
        <h3>장점</h3>
        <p>- 따로 조건부렌더링과 같은 처리가 필요하지 않습니다.</p>
        <br />

        <h3>단점</h3>
        <p>- dialog.show가 아닌 dialog.showModal을 사용했습니다.</p>
        <p>- Modal과 같은 open, close 처리 함수가 필요합니다.</p>
        <p>
          - dialog는 DOM트리에 계속 존재하므로 useStyleInView로 계산되는
          스타일이 처음에 빈값으로 고정되는 문제가 있습니다.
        </p>
        <p>
          -{'>'}이로인해 popover가 열렸을 때 style을 다시 계산하도록
          useStyleInView의 needUpdate 매개변수를 사용해줘야 합니다.
        </p>
        <p>- 여전히 popover 내부 요소를 수정할 수 없습니다.</p>
      </UiExplanation>
    </>
  )
}

export default Popover4
