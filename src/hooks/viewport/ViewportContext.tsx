import { createContext, ReactNode, useSyncExternalStore } from 'react'
import { DefaultRect, getViewportRect, subscribe, Rect } from './viewportUtils'

export const ViewportContext = createContext<Rect>(DefaultRect)

const ViewportContextProvider = ({ children }: { children: ReactNode }) => {
  const viewportRect = useSyncExternalStore(subscribe, getViewportRect())

  return (
    <ViewportContext.Provider value={viewportRect}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportContextProvider
