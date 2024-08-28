import React, { ReactElement } from 'react'

export interface TooltipProps {
  children: React.ReactNode
  direction: 'top' | 'bottom' | 'left' | 'right'
  arrow: boolean
  eventType: 'hover' | 'focus' | 'click'
  tooltipContent: string | ReactElement
}
export interface TooltipContentType {
  direction: 'top' | 'bottom' | 'left' | 'right'
  isOpen: boolean
  arrow: boolean
}
