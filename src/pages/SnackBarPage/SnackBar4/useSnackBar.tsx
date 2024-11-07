import {
  EventHandler,
  ReactNode,
  useCallback,
  useState,
  useRef,
  MouseEvent
} from 'react'
import { createPortal } from 'react-dom'
import SnackBarItem from './SnackBarItem'

type SnackbarStatus = 'open' | 'close' | null

export type ToastIconId = 'check-solid' | 'info-solid' | 'warn-solid'

export type Snackbar = {
  status: SnackbarStatus
  iconId: ToastIconId
  duration: number
  progressPaused: boolean
  children: ReactNode
  onMouseEnter?: EventHandler<MouseEvent<HTMLDivElement>>
  onMouseLeave?: EventHandler<MouseEvent<HTMLDivElement>>
}

const useSnackBar = (
  iconId: ToastIconId,
  duration: number,
  children: ReactNode
) => {
  const timeoutId = useRef<number | null>(null)
  const [status, setStatus] = useState<SnackbarStatus>(null)
  const isSnackbarOpen = useRef<boolean>(false)
  const [progressPaused, setProgressPaused] = useState(false)

  const elapsedDuration = useRef<number>(0)
  const startTime = useRef<number | null>(null)

  const openSnackbar = useCallback(() => {
    if (isSnackbarOpen.current) return
    isSnackbarOpen.current = true
    setStatus('open')
    startTime.current = Date.now() // 애니메이션 시작 시간 기록

    timeoutId.current = window.setTimeout(() => {
      setStatus('close')
      isSnackbarOpen.current = false
      setTimeout(() => setStatus(null), 400)
    }, duration)
  }, [duration])

  const handleMouseEnter = () => {
    if (progressPaused) return
    setProgressPaused(true)
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
      elapsedDuration.current += Date.now() - (startTime.current || Date.now()) // 애니메이션이 멈춘 상태에서 경과 시간을 기록
      startTime.current = null
    }
  }

  const handleMouseLeave = () => {
    if (!progressPaused) return
    setProgressPaused(false)
    startTime.current = Date.now() // 애니메이션 재개 시간 기록
    const remainingTime = duration - elapsedDuration.current // 남은 시간 계산

    timeoutId.current = window.setTimeout(() => {
      setStatus('close')
      isSnackbarOpen.current = false
      setTimeout(() => setStatus(null), 400)
    }, remainingTime)
  }

  return {
    snackbar:
      status !== null
        ? createPortal(
            <SnackBarItem
              status={status}
              iconId={iconId}
              progressPaused={progressPaused}
              duration={duration}
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
