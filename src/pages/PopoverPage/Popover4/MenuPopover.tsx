import useStyleInView4 from '@/hooks/viewport/useStyleInView4'
import { ReactNode, RefObject } from 'react'
import { MenuDialogContainer } from '../Popover.styled'

const menuPosition = {
  top: -4,
  bottom: -4,
  left: 8,
  right: 8
}
const MenuPopover = ({
  close,
  wrapperRef,
  dialogRef,
  children,
  opened
}: {
  close: () => void
  wrapperRef: RefObject<HTMLElement>
  dialogRef: RefObject<HTMLDialogElement>
  children: ReactNode
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
      {children}
    </MenuDialogContainer>
  )
}

export default MenuPopover
