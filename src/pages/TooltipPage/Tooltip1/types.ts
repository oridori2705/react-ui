import React from 'react'

export interface Props {
  children: React.ReactNode
  direction: 'top' | 'bottom' | 'left' | 'right'
  arrow: boolean
  eventType: 'hover' | 'focus' | 'click'
  tooltipText: string
}
export interface TooltipContentType {
  direction: 'top' | 'bottom' | 'left' | 'right'
  isOpen: boolean
  arrow: boolean
}
