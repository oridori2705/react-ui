import { RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  MenuItem,
  MenuPopoverContainer,
  MenuPopoverOverlay
} from '../Popover.styled'
import useStyleInView4 from '@/hooks/viewport/useStyleInView4'

const menuPosition = {
  top: -4,
  bottom: -4,
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
  const style = useStyleInView4(wrapperRef, targetRef, menuPosition, 'absolute')

  return createPortal(
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
    </MenuPopoverOverlay>,
    document.querySelector('#popoverRoot')!
  )
}

export default MenuPopover
