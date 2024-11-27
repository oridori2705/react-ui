import { useState } from 'react'

interface UseModalResult {
  open: () => void
  close: () => void
  isOpen: boolean
}

export const useModal = (initialValue = false): UseModalResult => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    open,
    close,
    isOpen
  }
}
export default useModal
