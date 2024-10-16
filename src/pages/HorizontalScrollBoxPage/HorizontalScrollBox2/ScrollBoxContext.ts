import { createContext, useContext } from 'react'
import { ItemElemType } from './ScrollBoxComponent2'

type ScrollBoxContextType = {
  registerItem: (index: number, element: ItemElemType) => void
} | null

export const ScrollBoxContext = createContext<ScrollBoxContextType>(null)

export const useScrollBoxContext = () => {
  const context = useContext(ScrollBoxContext)
  if (!context) {
    throw new Error(
      'useScrollBoxContext는 반드시 PlayerProvider 내에서 사용되어야 합니다.'
    )
  }
  return context
}
