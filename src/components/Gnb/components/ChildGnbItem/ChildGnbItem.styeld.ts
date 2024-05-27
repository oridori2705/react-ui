import styled from '@emotion/styled'
import { commonLiStyle, commonLinkStyle } from '../style'

interface ChildGnbItemLiProps {
  active: boolean
}

export const ChildGnbItemLi = styled.li<ChildGnbItemLiProps>`
  ${commonLiStyle}
  background-color: ${props => (props.active ? '#58a' : '#444')};
  a {
    ${commonLinkStyle}
  }
`
