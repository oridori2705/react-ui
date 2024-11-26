'use client'

import { useCallback, useEffect, useState } from 'react'

import ToastItem from './ToastItem'
import { Toast, ToastCreate, ToastIconId } from './type'
import styled from '@emotion/styled'

export interface ToastManagerProps {
  bind: (createToast: ToastCreate) => void
}

const ToastManager = ({ bind }: ToastManagerProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const createToast = (
    message: string,
    iconId: ToastIconId,
    duration: number
  ) => {
    const newToast = {
      id:
        'id-' +
        Date.now().toString(36) +
        Math.random().toString(36).substring(2, 8),
      message,
      iconId,
      duration
    }
    setToasts(prev => [...prev, newToast])
  }

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  useEffect(() => {
    bind(createToast)
  }, [bind])

  return (
    <ToastContainer>
      {toasts.map(({ id, message, iconId, duration }) => (
        <ToastItem
          key={id}
          id={id}
          message={message}
          iconId={iconId}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </ToastContainer>
  )
}

export default ToastManager

const ToastContainer = styled.div`
  position: fixed;
  bottom: 58px;
  z-index: 20;
  transform: translateX(15%);
`
