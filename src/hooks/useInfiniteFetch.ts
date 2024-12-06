import { useCallback, useEffect, useRef, useState } from 'react'

export type Datum = {
  index: number
  id: string
  title: string
  description: string
}
export type FetchState<T> = {
  data: T[][]
  state: 'loading' | 'fetched' | 'idle' | 'error'
}

export type UseInfiniteFetchParams<T> = {
  fetchFn: () => Promise<T[]>
}

const useInfiniteFetch = <T>({ fetchFn }: UseInfiniteFetchParams<T>) => {
  const fetchFnRef = useRef(fetchFn)

  useEffect(() => {
    fetchFnRef.current = fetchFn
  }, [fetchFn])

  const [state, setState] = useState<FetchState<T>>({
    state: 'idle',
    data: []
  })

  const fetchNextPage = useCallback(async () => {
    if (!fetchFnRef.current) return
    setState(prev => ({
      ...prev,
      state: 'loading'
    }))

    const nextPageData = await fetchFnRef.current()

    setState(prev => {
      const nextData = [...(prev.data || []), nextPageData]
      return {
        data: nextData,
        state: 'fetched'
      }
    })
  }, [])

  return {
    ...state,
    fetchNextPage
  }
}

export default useInfiniteFetch
