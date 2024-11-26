'use client'

import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import ToastManager from './ToastManager'
import { ToastCreate, ToastIconId } from './type'

let createToastInstance: ToastCreate | undefined

const Toast = () => {
  const portalId = 'toast-portal'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const portalElement = document.getElementById(portalId)
      if (!portalElement) {
        const newPortalElement = document.createElement('div')
        newPortalElement.id = portalId
        document.body.appendChild(newPortalElement)

        createRoot(newPortalElement).render(
          <ToastManager
            bind={createToast => {
              createToastInstance = createToast
            }}
          />
        )
      }
    }
  }, [])

  const show = (message: string, iconId: ToastIconId, duration = 2000) => {
    if (!createToastInstance) throw new Error('ToastManager 초기화 오류')
    createToastInstance(message, iconId, duration)
  }

  return { show }
}

export default Toast
