import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  RefObject
} from 'react'

type DropdownProps<T> = {
  items: T[]
  size: number
  isOpen: boolean
  focusedIndex: number
  selectedIndex: number
  itemsRef: RefObject<HTMLLIElement[]>
}

type DropdownDispatchProps<T> = {
  setItems: Dispatch<SetStateAction<T[]>>
  focusIndex: Dispatch<SetStateAction<number>>
  selectIndex: (index: number) => void
  toggle: (force?: boolean) => void
  handleKeyDown: (e: KeyboardEvent) => void
}

type KeyEventHandler = <T>(
  event: KeyboardEvent,
  {
    focusIndex
  }: Pick<DropdownProps<T>, 'size' | 'focusedIndex'> &
    Pick<DropdownDispatchProps<T>, 'focusIndex' | 'selectIndex' | 'toggle'>
) => void

export const KeyEventMap: Partial<
  Record<KeyboardEvent<Element>['key'], KeyEventHandler>
> = {
  ArrowUp: (e, { size, focusIndex }) => {
    e.preventDefault()
    focusIndex(prev => (size + prev - 1) % size)
  },
  ArrowDown: (e, { size, focusIndex }) => {
    e.preventDefault()
    focusIndex(prev => (size + prev + 1) % size)
  },
  Enter: (e, { focusedIndex, selectIndex }) => {
    e.preventDefault()
    selectIndex(focusedIndex)
  },
  Escape: (_e, { toggle }) => {
    toggle(false)
  }
}

export type DropdownTriggerProps<T> = {
  selectedItem: T
  toggle: (force?: boolean) => void
}

export type DropdownItemProps<T> = {
  item: T
  index: number
  focusedIndex: number
  selectedIndex: number
  selectIndex: (index: number) => void
  itemsRef: RefObject<HTMLElement[]>
}
export type DropdownListProps<T> = { items: T[]; isOpen: boolean }
export type DropdownContainerProps = {
  handleKeyDown: (e: KeyboardEvent) => void
}

//createContext를 할 때 DropDown 아이템의 타입을 제네릭으로 받아야할 때 아래와 같이 createDropDown이라는 함수내부에서 진행하고, 제네릭을 사용할 수 있게 한다.
//그래서 DropDown 기능을 사용할 때 해당 함수를 호출한 이후에 사용하는 것이다.
const createDropdown = <T,>() => {
  const DropdownContext = createContext<DropdownProps<T>>({
    items: [],
    size: 0,
    isOpen: false,
    focusedIndex: -1,
    selectedIndex: -1,
    itemsRef: { current: [] }
  })
  const DropdownDispatchContext = createContext<DropdownDispatchProps<T>>({
    setItems: () => {},
    focusIndex: () => {},
    selectIndex: () => {},
    toggle: () => {},
    handleKeyDown: () => {}
  })
  const useDropdown = () => useContext(DropdownContext)
  const useSetDropdown = () => useContext(DropdownDispatchContext)

  type Headless<T> = {
    children: (props: T) => JSX.Element | null
  }

  const DropdownTrigger = ({ children }: Headless<DropdownTriggerProps<T>>) => {
    const { items, selectedIndex } = useDropdown()
    const { toggle } = useSetDropdown()
    const selectedItem = items[selectedIndex]

    return children({
      selectedItem,
      toggle
    })
  }

  const DropdownItem = ({
    item,
    index,
    children
  }: Headless<DropdownItemProps<T>> &
    Pick<DropdownItemProps<T>, 'item' | 'index'>) => {
    const { focusedIndex, selectedIndex, itemsRef } = useDropdown()
    const { selectIndex } = useSetDropdown()

    return children({
      item,
      index,
      focusedIndex,
      selectedIndex,
      selectIndex,
      itemsRef
    })
  }

  const DropdownList = ({ children }: Headless<DropdownListProps<T>>) => {
    const { items, isOpen } = useDropdown()
    return children({ items, isOpen })
  }

  const DropdownContainer = ({
    Component,
    children
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: (props: any) => JSX.Element
    children: ReactNode
  }) => {
    const { handleKeyDown } = useSetDropdown()
    return <Component handleKeyDown={handleKeyDown}>{children}</Component>
  }

  const DropdownContextProvider = ({
    list,
    children
  }: {
    list: T[]
    children: ReactNode
  }) => {
    const [items, setItems] = useState(list)
    const [isOpen, setIsOpen] = useState(false)
    const [focusedIndex, focusIndex] = useState(-1)
    const [selectedIndex, selectIndex] = useState(-1)
    const itemsRef = useRef<HTMLLIElement[]>([])
    const size = items.length

    const toggle = useCallback(
      (force?: boolean) =>
        setIsOpen(prev => (typeof force === 'boolean' ? force : !prev)),
      []
    )

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        const { key } = event
        const handler = KeyEventMap[key]
        if (handler)
          handler(event, {
            size,
            focusedIndex,
            focusIndex,
            selectIndex,
            toggle
          })
      },
      [size, focusedIndex, focusIndex, selectIndex, toggle]
    )

    useEffect(() => {
      const targetElem = itemsRef.current?.[focusedIndex]
      if (targetElem)
        targetElem.scrollIntoView({
          block: 'nearest'
        })
    }, [focusedIndex])

    useEffect(() => {
      const closeDropdown = () => toggle(false)
      if (isOpen) {
        window.addEventListener('click', closeDropdown, { once: true })
      }
      return () => {
        window.removeEventListener('click', closeDropdown)
      }
    }, [isOpen, toggle])

    return (
      <DropdownContext.Provider
        value={{
          items,
          size,
          isOpen,
          focusedIndex,
          selectedIndex,
          itemsRef
        }}>
        <DropdownDispatchContext.Provider
          value={{
            setItems,
            toggle,
            focusIndex,
            selectIndex,
            handleKeyDown
          }}>
          {children}
        </DropdownDispatchContext.Provider>
      </DropdownContext.Provider>
    )
  }

  const Dropdown = {
    Provider: DropdownContextProvider,
    Container: DropdownContainer,
    Trigger: DropdownTrigger,
    List: DropdownList,
    Item: DropdownItem
  }

  return Dropdown
}

export default createDropdown
