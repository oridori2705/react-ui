import { useEffect, useRef } from 'react'
import useIntersectionObserver from '../LazyImagePage/hooks/useIntersectionObserver'
import useInfiniteFetch, { UseInfiniteFetchParams } from './useInfiniteFetch'

const ioOptions = { threshold: 0.5 }

export type UseInfiniteScrollParams<T> = UseInfiniteFetchParams<T>

const useInfiniteScroll = <T>({ fetchFn }: UseInfiniteScrollParams<T>) => {
  const { data, state, fetchNextPage } = useInfiniteFetch({ fetchFn })

  const moreRef = useRef<HTMLDivElement>(null)
  const {
    entries: [entry]
  } = useIntersectionObserver(moreRef, ioOptions)
  const isIntersecting = entry?.isIntersecting

  useEffect(() => {
    if (isIntersecting) fetchNextPage()
  }, [isIntersecting, fetchNextPage])

  return { data, state, moreRef }
}

export default useInfiniteScroll
