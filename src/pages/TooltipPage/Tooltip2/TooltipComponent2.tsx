import { FocusEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { TooltipProps } from '../Tooltip1/types'
import { TooltipContent, TooltipWrapper } from '../Tooltip1/Tooltip1.styled'
import useStyleInView1 from '../../../hooks/viewport/useStyleInView1'

const Tooltip = ({
  children,
  direction = 'top',
  arrow = true,
  eventType = 'hover',
  tooltipContent
}: TooltipProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const viewportDirection = useStyleInView1(wrapperRef, targetRef, direction)

  const [isOpen, setIsOpen] = useState(false)

  const changeIsOpen = (
    event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ) => {
    event.stopPropagation()

    setIsOpen(isOpen => !isOpen)
  }

  const closeEvent = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (eventType === 'click') {
      window.addEventListener('click', closeEvent)
    }

    return () => {
      window.removeEventListener('click', closeEvent)
    }
  }, [eventType])
  return (
    <div>
      <TooltipWrapper
        ref={wrapperRef}
        onClick={eventType === 'click' ? changeIsOpen : undefined}
        onMouseEnter={eventType === 'hover' ? changeIsOpen : undefined}
        onMouseLeave={eventType === 'hover' ? changeIsOpen : undefined}
        onFocus={eventType === 'focus' ? changeIsOpen : undefined}
        onBlur={eventType === 'focus' ? changeIsOpen : undefined}>
        {children}
        <TooltipContent
          ref={targetRef}
          isOpen={isOpen}
          direction={viewportDirection}
          arrow={arrow}
          onClick={
            eventType === 'click' ? e => e.stopPropagation() : undefined
          }>
          {tooltipContent}
        </TooltipContent>
      </TooltipWrapper>
    </div>
  )
}

export default Tooltip
