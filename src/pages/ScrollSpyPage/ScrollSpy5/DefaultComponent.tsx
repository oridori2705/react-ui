import { ReactElement } from 'react'

export const UList = ({ children }: { children: ReactElement[] }) => {
  return <ul>{children}</ul>
}

export const ListItem = ({
  scrollIndex,
  ItemId,
  children
}: {
  ItemId: number | string
  scrollIndex: number
  children: ReactElement
}) => {
  return (
    <li
      data-id={ItemId}
      data-number={scrollIndex}>
      {children}
    </li>
  )
}
