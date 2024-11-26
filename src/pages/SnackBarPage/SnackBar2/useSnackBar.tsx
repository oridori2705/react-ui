import {
  EventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
  Dispatch,
  useRef,
  MouseEvent
} from 'react'
import { createPortal } from 'react-dom'
import SnackBarItem from './SnackBarItem'

const SNACKBAR_DURATION = 3000
type SnackbarStatus = 'open' | 'close' | null

export type Snackbar = {
  children: ReactNode
  status: SnackbarStatus
  setStatus: Dispatch<SetStateAction<SnackbarStatus>>
  onMouseEnter?: EventHandler<MouseEvent<HTMLDivElement>>
  onMouseLeave?: EventHandler<MouseEvent<HTMLDivElement>>
}

const useSnackBar = (children: ReactNode) => {
  const timeoutId = useRef<number | null>(null)
  const [status, setStatus] = useState<SnackbarStatus>(null)
  const isSnackbarOpen = useRef<boolean>(false)

  const openSnackbar = useCallback(() => {
    if (isSnackbarOpen.current) return
    isSnackbarOpen.current = true
    setStatus('open')
    timeoutId.current = window.setTimeout(() => {
      setStatus('close')
      isSnackbarOpen.current = false
    }, SNACKBAR_DURATION)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current)
  }
  const handleMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      setStatus('close')
    }, SNACKBAR_DURATION)
  }

  return {
    snackbar:
      status !== null
        ? createPortal(
            <SnackBarItem
              status={status}
              setStatus={setStatus}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {children}
            </SnackBarItem>,
            document.querySelector('#snackbarRoot')!
          )
        : null,
    open: openSnackbar
  }
}
export default useSnackBar
