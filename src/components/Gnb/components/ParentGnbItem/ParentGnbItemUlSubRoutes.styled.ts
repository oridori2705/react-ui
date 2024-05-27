import styled from '@emotion/styled'
import { ParentGnbItemUlSubRoutesProps, commonTransition } from '../style'

export const ParentGnbItemUlSubRoutes = styled.ul<ParentGnbItemUlSubRoutesProps>`
  ${commonTransition}
  display:block;
  background-color: ${props => (props.open ? ' #2fb3ff;' : 0)};
  height: ${props => (props.open ? `${props.length * 71}px` : 0)};
  overflow: hidden;
  li {
    padding-left: 10px;
    a {
      padding-left: 33px;
      &::before {
        content: '';
        display: inline-block;
        border: 2px solid #fff;
        border-radius: 2px;
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
`
