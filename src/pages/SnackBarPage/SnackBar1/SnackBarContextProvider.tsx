import { ReactNode, useReducer } from 'react'
import {
  SnackbarContext,
  SnackbarSetContext,
  snackbarReducer
} from './snackBarContext'
import SnackbarRoot from './snackBarRoot'

const SnackbarContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(snackbarReducer, [])
  return (
    <SnackbarContext.Provider value={state}>
      <SnackbarSetContext.Provider value={dispatch}>
        {children}
        <SnackbarRoot />
      </SnackbarSetContext.Provider>
    </SnackbarContext.Provider>
  )
}

export default SnackbarContextProvider
