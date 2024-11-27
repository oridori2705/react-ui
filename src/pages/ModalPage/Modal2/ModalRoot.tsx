import { useEffect, useRef } from 'react'

const mutationObserverOption: MutationObserverInit = {
  childList: true,
  subtree: false
}

const ModalRoot = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: MutationObserver
    if (ref.current) {
      observer = new MutationObserver(() => {
        const size = ref.current?.childNodes.length || 0
        document.body.classList.toggle('no-scroll', size > 0)
      })
      observer.observe(ref.current, mutationObserverOption)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      id="modalRoot"
      ref={ref}
    />
  )
}

export default ModalRoot
