import { ReactElement } from 'react'
import { BoxList } from '../HorizontalScrollBox1/HorizontalScrollBox.styled'
import { useScrollBoxContext } from './ScrollBoxContext'

export const Wrapper = ({
  children,
  index
}: {
  children: ReactElement
  index: number
}) => {
  const { registerItem } = useScrollBoxContext()
  return <BoxList ref={r => registerItem(index, r)}>{children}</BoxList>
}
