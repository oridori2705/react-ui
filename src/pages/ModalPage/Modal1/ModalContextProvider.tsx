import {
  createContext,
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'

type ModalState = Map<string, ReactNode>
type ModalDispatchState = Dispatch<SetStateAction<ModalState>>

export const ModalContext = createContext<ModalState>(new Map())
export const ModalDispatchContext = createContext<ModalDispatchState>(() => {})

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalState>(new Map())
  const modalValues = Array.from(modals.values())

  useEffect(() => {
    document.body.classList.toggle('no-scroll', modals.size > 0)
  }, [modals])

  return (
    <ModalContext.Provider value={modals}>
      <ModalDispatchContext.Provider value={setModals}>
        {children}
        <div id="modalRoot">
          {modalValues.map((children, i) => (
            <Fragment key={i}>{children}</Fragment>
          ))}
        </div>
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  )
}
