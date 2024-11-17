import { useCallback, useEffect, useRef } from 'react'

// 시간 중지 및 재진행 기능 추가한 useTimeout
const useTimeout = (fn: () => void, delay: number) => {
  const timeoutId = useRef<number | null>(null)
  const callback = useRef(fn)
  const elapsedDuration = useRef<number>(0)
  const startTime = useRef<number | null>(null)

  useEffect(() => {
    callback.current = fn
  }, [fn])

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)
    startTime.current = Date.now()
    const remainingTime = delay - elapsedDuration.current

    timeoutId.current = setTimeout(() => {
      callback.current()
    }, remainingTime)
  }, [delay])

  const pause = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
      if (startTime.current) {
        elapsedDuration.current += Date.now() - startTime.current
        startTime.current = null
      }
    }
  }, [])

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)
    elapsedDuration.current = 0
  }, [])

  useEffect(() => clear, [clear])

  useEffect(() => {
    run()

    return clear
  }, [clear, run])

  return { clear, pause, run } // run 함수도 반환
}

export default useTimeout
