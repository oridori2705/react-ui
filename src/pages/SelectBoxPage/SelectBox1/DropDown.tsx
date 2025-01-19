import styled from '@emotion/styled'
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

export type DropdownItemType = {
  id: string
  text: string
}
type DropdownProps = {
  items: DropdownItemType[]
  size: number
  isOpen: boolean
  focusedIndex: number
  selectedIndex: number
  itemsRef: RefObject<HTMLLIElement[]>
}

type DropdownDispatchProps = {
  setItems: Dispatch<SetStateAction<DropdownItemType[]>>
  focusIndex: Dispatch<SetStateAction<number>>
  selectIndex: (index: number) => void
  toggle: (force?: boolean) => void
  handleKeyDown: (e: KeyboardEvent) => void
}

type KeyEventHandler = (
  event: KeyboardEvent,
  {
    focusIndex
  }: Pick<DropdownProps, 'size' | 'focusedIndex'> &
    Pick<DropdownDispatchProps, 'focusIndex' | 'selectIndex' | 'toggle'>
) => void

const KeyEventMap: Partial<
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

const DropdownContext = createContext<DropdownProps>({
  items: [], // 실제 아이템
  size: 0, //아이템 갯수
  isOpen: false, // 현재 DropDownBox의 열림 상태
  focusedIndex: -1, // 현재 키보드로 focus된 아이템
  selectedIndex: -1, // 현재 선택된 아이템
  itemsRef: { current: [] } // 키보드 이벤트시 scrollInToView를 위한 ref
})

const DropdownDispatchContext = createContext<DropdownDispatchProps>({
  setItems: () => {}, // 아이템 setter
  focusIndex: () => {}, // focus아이템 setter
  selectIndex: () => {}, // select아이템 setter
  toggle: () => {}, // isOpen의 setter
  handleKeyDown: () => {} // 키보드 이벤트(up,down,enter,escape)
})

const useDropdown = () => useContext(DropdownContext)
const useSetDropdown = () => useContext(DropdownDispatchContext)

const DropdownTrigger = () => {
  const { items, selectedIndex } = useDropdown()
  const { toggle } = useSetDropdown()
  const selectedItem = items[selectedIndex]

  return (
    <button onClick={() => toggle()}>
      <span>{selectedItem?.text || '항목을 선택하세요'}</span>
    </button>
  )
}

const DropdownItem = ({
  item,
  index
}: {
  item: DropdownItemType
  index: number
}) => {
  const { focusedIndex, selectedIndex, itemsRef } = useDropdown()
  const { selectIndex } = useSetDropdown()

  return (
    <DDIList
      role="option"
      aria-selected={selectedIndex === index}
      aria-current={focusedIndex === index}
      ref={r => {
        if (r && itemsRef.current) itemsRef.current[index] = r
      }}>
      <button onClick={() => selectIndex(index)}>
        <span>{item.text}</span>
      </button>
    </DDIList>
  )
}

const DropdownList = () => {
  const { items, isOpen } = useDropdown()
  if (!isOpen) return null

  return (
    <DDLuList>
      {items.map((item, i) => (
        <DropdownItem
          item={item}
          index={i}
          key={item.id}
        />
      ))}
    </DDLuList>
  )
}

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  const { handleKeyDown } = useSetDropdown()

  return (
    <DDCDiv
      onKeyDown={handleKeyDown}
      onClick={e => e.stopPropagation()}>
      {children}
    </DDCDiv>
  )
}

const DropdownContextProvider = ({
  list,
  children
}: {
  list: DropdownItemType[]
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

export default Dropdown

const DDIList = styled.li`
  position: relative;
  &:first-of-type {
    margin-top: 8px;
  }

  &[aria-selected='true'] {
    background-color: #eee;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border: 2px solid #c35;
    }
  }
  &:hover {
    background-color: #fff5f5;
  }
  &[aria-current='true'] {
    background-color: #fee;
  }
`

const DDLuList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`

const DDCDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 400px;
`
