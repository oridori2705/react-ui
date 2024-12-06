import useStyleInView3 from '@/hooks/viewport/useStyleInView3'
import { ReactNode, RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'
import { MenuPopoverContainer, MenuPopoverOverlay } from '../Popover.styled'

const menuPosition = {
  top: -4,
  bottom: -4,
  left: 8,
  right: 8
}

const MenuPopover = ({
  opened,
  close,
  wrapperRef,
  children
}: {
  opened: boolean
  close: () => void
  wrapperRef: RefObject<HTMLElement>
  children: ReactNode
}) => {
  const targetRef = useRef<HTMLUListElement>(null)
  const style = useStyleInView3(
    wrapperRef,
    targetRef,
    menuPosition,
    'absolute',
    opened
  )
  // const portalId = 'popoverRoot'

  // useLayoutEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const portalElement = document.getElementById(portalId)
  //     if (!portalElement) {
  //       const newPortalElement = document.createElement('div')
  //       newPortalElement.id = portalId

  //       document.body.appendChild(newPortalElement)
  //     }
  //   }
  // }, [])

  return (
    opened &&
    createPortal(
      <MenuPopoverOverlay onClick={close}>
        <MenuPopoverContainer
          onClick={e => e.stopPropagation()}
          ref={targetRef}
          style={style}>
          {children}
        </MenuPopoverContainer>
      </MenuPopoverOverlay>,
      document.body
    )
  )
}

export default MenuPopover
