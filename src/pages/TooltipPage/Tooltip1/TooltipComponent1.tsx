import { FocusEvent, MouseEvent, useEffect, useState } from 'react'
import { Props } from './types'
import { TooltipWrapper, TooltipContent } from './Tooltip1.styled'

const Tooltip = ({
  children,
  direction = 'top',
  arrow = true,
  eventType = 'hover',
  tooltipText
}: Props) => {
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
        onClick={eventType === 'click' ? changeIsOpen : undefined}
        onMouseEnter={eventType === 'hover' ? changeIsOpen : undefined}
        onMouseLeave={eventType === 'hover' ? changeIsOpen : undefined}
        onFocus={eventType === 'focus' ? changeIsOpen : undefined}
        onBlur={eventType === 'focus' ? changeIsOpen : undefined}>
        {children}
        <TooltipContent
          isOpen={isOpen}
          direction={direction}
          arrow={arrow}
          onClick={
            eventType === 'click' ? e => e.stopPropagation() : undefined
          }>
          {tooltipText}
        </TooltipContent>
      </TooltipWrapper>
    </div>
  )
}

export default Tooltip
