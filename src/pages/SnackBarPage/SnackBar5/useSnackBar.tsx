import {
  ReactNode,
  useCallback,
  useState,
  useRef,
  useLayoutEffect
} from 'react'
import { createPortal } from 'react-dom'
import SnackBarItem from '../SnackBar5/SnackBarItem'
import { createRoot } from 'react-dom/client'
import { SnackbarWrapper } from './SnackBar.styled'

type SnackbarStatus = boolean

export type ToastIconId = 'check-solid' | 'info-solid' | 'warn-solid'

export type Snackbar = {
  status: boolean
  onDone: () => void
  iconId: ToastIconId
  duration: number
  progressPaused: boolean
  children: ReactNode
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const useSnackBar = (
  iconId: ToastIconId,
  duration: number,
  children: ReactNode
) => {
  const timeoutId = useRef<number | null>(null)
  const [status, setStatus] = useState<SnackbarStatus>(false)
  const [progressPaused, setProgressPaused] = useState(false)

  const portalId = 'toast-portal'

  const elapsedDuration = useRef<number>(0)
  const startTime = useRef<number | null>(null)

  const openSnackbar = useCallback(() => {
    setStatus(true)
    elapsedDuration.current = 0
    startTime.current = Date.now()
  }, [])

  const closeSnackBar = useCallback(() => {
    setStatus(false)
  }, [])

  const handleMouseEnter = () => {
    if (progressPaused) return
    setProgressPaused(true)
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
      if (startTime.current) {
        elapsedDuration.current += Date.now() - startTime.current
        startTime.current = null
      }
    }
  }

  const handleMouseLeave = () => {
    if (!progressPaused) return
    setProgressPaused(false)
    const remainingTime = duration - elapsedDuration.current

    if (remainingTime <= 0) {
      setTimeout(() => setStatus(false), 400)
      return
    }

    startTime.current = Date.now()
    timeoutId.current = window.setTimeout(() => {
      setTimeout(() => setStatus(false), 400)
    }, remainingTime)
  }

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const portalElement = document.getElementById(portalId)
      if (!portalElement) {
        const newPortalElement = document.createElement('div')
        newPortalElement.id = portalId
        document.body.appendChild(newPortalElement)

        createRoot(newPortalElement).render(
          <SnackbarWrapper id="snackbarRoot" />
        )
      }
    }
  }, [])

  return {
    snackbar: status
      ? createPortal(
          <SnackBarItem
            status={status}
            iconId={iconId}
            progressPaused={progressPaused}
            duration={duration}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDone={closeSnackBar}>
            {children}
          </SnackBarItem>,
          document.getElementById('snackbarRoot')!
        )
      : null,
    open: openSnackbar
  }
}
export default useSnackBar
