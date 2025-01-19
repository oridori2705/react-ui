import {
  Dispatch,
  KeyboardEvent,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import data from '../data'
import styled from '@emotion/styled'

const Dropdown5 = () => {
  return (
    <article>
      <DropDown data={data} />
    </article>
  )
}

export default Dropdown5

interface DropDownProps {
  data: DropDownData[]
}

type DropDownData = { id: string; text: string; value: string }

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

const DropDown = ({ data }: DropDownProps) => {
  const [items] = useState<DropDownData[]>(data)
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
    <DDCDiv
      onKeyDown={handleKeyDown}
      onClick={e => e.stopPropagation()}>
      <button onClick={() => toggle()}>
        <span>{items[selectedIndex]?.text || '항목을 선택하세요'}</span>
      </button>
      {isOpen && (
        <DDLuList>
          {items.map((item, index) => (
            <DDIList
              role="option"
              aria-selected={selectedIndex === index}
              aria-current={focusedIndex === index}
              ref={r => {
                if (r && itemsRef.current) itemsRef.current[index] = r
              }}
              data-value={item.value}
              key={item.id}>
              <button onClick={() => selectIndex(index)}>
                <span>{item.text}</span>
              </button>
            </DDIList>
          ))}
        </DDLuList>
      )}
    </DDCDiv>
  )
}

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
