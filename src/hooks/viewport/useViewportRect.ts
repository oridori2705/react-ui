import { useContext } from 'react'
import { ViewportContext } from './ViewportContext'

// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components) 오류로 인해 분리
export const useViewportRect = () => {
  return useContext(ViewportContext)
}
