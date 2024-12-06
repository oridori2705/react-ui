import useStyleInView4 from '@/hooks/viewport/useStyleInView4'
import { RefObject } from 'react'
import {
  MenuDialogContainer,
  MenuDialogItem,
  MenuDialogList
} from '../Popover.styled'

const menuPosition = {
  top: -4,
  bottom: -4,
  left: 8,
  right: 8
}
const MenuPopover = ({
  id,
  close,
  wrapperRef,
  dialogRef,
  opened
}: {
  id: string
  close: () => void
  wrapperRef: RefObject<HTMLElement>
  dialogRef: RefObject<HTMLDialogElement>
  opened: boolean //dialog의 경우 popover를 오픈하게 되면 이상한 위치에 지정되게 된다. 이는 style을 계산하지않아서인데. 이를 위해 dialog를 open할 때 계산할 수 있도록 했다.
}) => {
  const style = useStyleInView4(
    wrapperRef,
    dialogRef,
    menuPosition,
    'absolute',
    opened
  )

  return (
    <MenuDialogContainer
      ref={dialogRef}
      style={style}
      onClick={close}>
      <MenuDialogList onClick={e => e.stopPropagation()}>
        <MenuDialogItem>#{id}</MenuDialogItem>
        <MenuDialogItem>스레드의 댓글</MenuDialogItem>
        <MenuDialogItem>메시지 전달</MenuDialogItem>
        <MenuDialogItem>나중을 위해 저장</MenuDialogItem>
        <MenuDialogItem>읽지 않음으로 표시</MenuDialogItem>
        <MenuDialogItem>삭제</MenuDialogItem>
      </MenuDialogList>
    </MenuDialogContainer>
  )
}

export default MenuPopover
