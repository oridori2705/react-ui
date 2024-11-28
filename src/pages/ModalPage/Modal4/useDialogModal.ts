import { useCallback, useRef } from 'react'

//querySelectorAll()로 탐색해야하므로 성능상 안좋을 수 있다.
//그래서 force를 줘서 모달이 열리면 탐색하지않고 바로 스크롤을 없애도록 한다.
export const toggleScroll = (force?: boolean) => {
  document.body!.classList.toggle(
    'no-scroll',
    typeof force === 'boolean'
      ? force
      : document.querySelectorAll('dialog[open]').length > 0
  )
}

const useDialogModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.showModal()
      toggleScroll(true)
    }
  }, [])

  const closeModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close()
      toggleScroll()
    }
  }, [])

  return {
    modalRef,
    openModal,
    closeModal
  }
}

export default useDialogModal
