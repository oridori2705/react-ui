import {
  createContext,
  Dispatch,
  EventHandler,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext
} from 'react'

const SNACKBAR_DURATION = 3000

export type Snackbar = {
  id: string
  children: ReactNode
  isOpen: boolean
  timeoutId: number | null
  onMouseEnter?: EventHandler<MouseEvent<HTMLDivElement>>
  onMouseLeave?: EventHandler<MouseEvent<HTMLDivElement>>
}
type SnackbarState = Snackbar[]

type SnackbarActionType = 'upsert' | 'remove'
type SnackbarActionPayload = Partial<Snackbar>

export const SnackbarContext = createContext<SnackbarState>([])
export const SnackbarSetContext = createContext<
  Dispatch<{
    type: SnackbarActionType
    payload: SnackbarActionPayload
  }>
>(() => {})

const DefaultSnackbar: Snackbar = {
  id: '',
  children: null,
  isOpen: true,
  timeoutId: null
}

export const useSnackbar = () => useContext(SnackbarContext)

export const useSetSnackbar = () => {
  const dispatch = useContext(SnackbarSetContext)
  const state = useSnackbar()

  const createSnackbar = useCallback(
    (id: string, children: ReactNode) => {
      const targetIndex = state.findIndex(item => item.id === id)

      if (targetIndex > -1 && state[targetIndex].isOpen) {
        return
      }

      const newItem: Snackbar = {
        id,
        children,
        isOpen: true,
        timeoutId: window.setTimeout(() => {
          dispatch({
            type: 'upsert',
            payload: { id, isOpen: false, timeoutId: null }
          })
        }, SNACKBAR_DURATION)
      }
      newItem.onMouseEnter = () => {
        if (newItem.timeoutId) clearTimeout(newItem.timeoutId)
      }
      newItem.onMouseLeave = () => {
        newItem.timeoutId = window.setTimeout(() => {
          dispatch({
            type: 'upsert',
            payload: { id, isOpen: false, timeoutId: null }
          })
        }, SNACKBAR_DURATION)
      }
      dispatch({ type: 'upsert', payload: newItem })
    },
    [dispatch, state]
  )
  const removeSnackbar = useCallback(
    (id: string) => {
      dispatch({ type: 'remove', payload: { id } })
    },
    [dispatch]
  )

  return {
    createSnackbar,
    removeSnackbar
  }
}

const snackbarReducerMap: Record<
  SnackbarActionType,
  (state: SnackbarState, payload: SnackbarActionPayload) => SnackbarState
> = {
  upsert: (state, payload) => {
    const targetIndex = state.findIndex(item => item.id === payload.id)
    if (targetIndex > -1) {
      const newSnackBars = state.map((item, i) => {
        if (i === targetIndex)
          return {
            ...state[targetIndex],
            ...payload
          }
        return item
      })
      return newSnackBars
    }

    return [...state, { ...DefaultSnackbar, ...payload }]
  },
  remove: (state, payload) => {
    const targetIndex = state.findIndex(item => item.id === payload.id)
    return state.filter((_, index) => index !== targetIndex)
  }
}

export const snackbarReducer = (
  state: SnackbarState,
  {
    type,
    payload
  }: { type: SnackbarActionType; payload: SnackbarActionPayload }
) => snackbarReducerMap[type](state, payload)
