import useStyleInView2 from '@/hooks/viewport/useStyleInView2'
import { RefObject, useRef } from 'react'
import {
  MenuItem,
  MenuPopoverContainer,
  MenuPopoverOverlay
} from '../Popover.styled'

const menuPosition = {
  top: 39,
  bottom: 'calc(100% - 5px)',
  left: 8,
  right: 8
}

const MenuPopover = ({
  id,
  close,
  wrapperRef
}: {
  id: string
  close: () => void
  wrapperRef: RefObject<HTMLElement>
}) => {
  const targetRef = useRef<HTMLUListElement>(null)
  const style = useStyleInView2(wrapperRef, targetRef, menuPosition)
  return (
    <MenuPopoverOverlay onClick={close}>
      <MenuPopoverContainer
        onClick={e => e.stopPropagation()}
        ref={targetRef}
        style={style}>
        <li>#{id}</li>
        <MenuItem>스레드의 댓글</MenuItem>
        <MenuItem>메시지 전달</MenuItem>
        <MenuItem>나중을 위해 저장</MenuItem>
        <MenuItem>읽지 않음으로 표시</MenuItem>
        <MenuItem>삭제</MenuItem>
      </MenuPopoverContainer>
    </MenuPopoverOverlay>
  )
}

export default MenuPopover
