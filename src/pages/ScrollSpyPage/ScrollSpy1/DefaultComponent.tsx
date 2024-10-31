import { ReactElement } from 'react'

export const UList = ({ children }: { children: ReactElement[] }) => {
  return <ul>{children}</ul>
}

export const ListItem = ({
  scrollNumber,
  ItemId,
  children
}: {
  ItemId: number | string
  scrollNumber: number
  children: ReactElement
}) => {
  return (
    <li
      data-id={ItemId}
      data-number={scrollNumber}>
      {children}
    </li>
  )
}
