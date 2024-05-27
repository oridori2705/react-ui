import styled from '@emotion/styled'
import { ParentGnbItemLiProps, commonLiStyle, commonTransition } from '../style'

export const ParentGnbItemLi = styled.li<ParentGnbItemLiProps>`
  ${commonLiStyle}
  height: auto;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: 2px;
    border: 6px solid transparent;
    border-left-color: #fff;
    margin-right: 4px;
    margin-left: 20px;
    ${commonTransition}
    transform-origin: left;
    transform: ${props => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
  a {
    display: inline-block;
    padding: 25px 25px 25px 10px;
    height: 71px;
  }
`
