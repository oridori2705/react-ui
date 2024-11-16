import { ReactNode, useCallback, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import SnackBarItem from '../SnackBar5/SnackBarItem'

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

  const elapsedDuration = useRef<number>(0)
  const startTime = useRef<number | null>(null)

  const openSnackbar = useCallback(() => {
    setStatus(true)
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
      elapsedDuration.current += Date.now() - (startTime.current || Date.now())
      startTime.current = null
    }
  }

  const handleMouseLeave = () => {
    if (!progressPaused) return
    setProgressPaused(false)
    startTime.current = Date.now()
    const remainingTime = duration - elapsedDuration.current

    timeoutId.current = window.setTimeout(() => {
      setTimeout(() => setStatus(false), 400)
    }, remainingTime)
  }

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
