import { ReactElement } from 'react'

export const UList = ({ children }: { children: ReactElement[] }) => {
  return <ul>{children}</ul>
}

export const ListItem = ({
  scrollIndex,
  ItemId,
  title,
  children
}: {
  ItemId: number | string
  scrollIndex: number
  title: string
  children: ReactElement
}) => {
  return (
    <li
      data-id={ItemId}
      data-number={scrollIndex}>
      <div
        className="list-title"
        style={{ display: 'none' }}>
        {title}
      </div>
      {children}
    </li>
  )
}
