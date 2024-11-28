import { ReactNode, useCallback, useContext } from 'react'
import { ModalContext, ModalDispatchContext } from './ModalContextProvider'

export const useModals = () => useContext(ModalContext)
export const useSetModals = () => {
  const setModals = useContext(ModalDispatchContext)

  const openModal = useCallback(
    (id: string, children: ReactNode) => {
      setModals(prev => {
        const newMap = new Map(prev)
        newMap.set(id, children)
        return newMap
      })
    },
    [setModals]
  )

  const closeModal = useCallback(
    (id: string) => {
      setModals(prev => {
        const newMap = new Map(prev)
        newMap.delete(id)
        return newMap
      })
    },
    [setModals]
  )

  return {
    openModal,
    closeModal
  }
}
