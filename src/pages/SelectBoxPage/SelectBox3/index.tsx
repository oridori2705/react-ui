import { KeyboardEvent, ReactNode } from 'react'
import data from '../data'
import useDropdown, {
  DropdownItemProps,
  DropdownListProps,
  DropdownTriggerProps
} from './useDropDown'
import styled from '@emotion/styled'

type DropdownItemType = {
  id: string
  text: string
}

const DDTrigger = ({
  selectedItem,
  toggle
}: DropdownTriggerProps<DropdownItemType>) => {
  return (
    <button onClick={() => toggle()}>
      <span>{selectedItem?.text || '항목을 선택하세요'}</span>
    </button>
  )
}

const DDItem = ({
  item,
  index,
  selectedIndex,
  focusedIndex,
  selectIndex,
  itemsRef
}: DropdownItemProps<DropdownItemType>) => {
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

const DDList = ({ children, isOpen }: DropdownListProps) => {
  return (
    <DDLuList style={{ display: isOpen ? 'block' : 'none' }}>
      {children}
    </DDLuList>
  )
}

const DDContainer = ({
  handleKeyDown,
  children
}: {
  handleKeyDown: (e: KeyboardEvent) => void
  children: ReactNode
}) => {
  return (
    <DDCDiv
      onKeyDown={handleKeyDown}
      onClick={e => e.stopPropagation()}>
      {children}
    </DDCDiv>
  )
}

const Dropdown3 = () => {
  const { getContainerProps, getTriggerProps, getListProps, getItemProps } =
    useDropdown(data)

  return (
    <article>
      <h3>3. HeadLess + Hook을 활용한 방법</h3>
      <DDContainer {...getContainerProps()}>
        <DDTrigger {...getTriggerProps()} />
        <DDList {...getListProps()}>
          {data.map((item, i) => (
            <DDItem
              key={item.id}
              {...getItemProps(i)}
            />
          ))}
        </DDList>
      </DDContainer>
    </article>
  )
}

export default Dropdown3

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
