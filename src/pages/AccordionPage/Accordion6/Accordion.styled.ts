import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface AccordionPropsCurrent {
  current: boolean
}

export const AccordionContainer = styled.ul`
  border: 1px solid #ccc;
  border-bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`
export const AccordionTab = styled.div<AccordionPropsCurrent>`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &::before {
    content: '${props => (props.current ? '-' : '+')}';
    margin: 0 8px 0 -5px;
  }
`
export const AccordionItemLi = styled.li<AccordionPropsCurrent>`
  background-color: ${props => (props.current ? '#ace' : '#fff')};
  overflow: hidden;
  .description {
    background-color: #eff;
    transition: all 0.3s;
    ${props =>
      props.current
        ? css`
            padding: 15px;
            border-bottom: 1px solid #ccc;
            max-height: 100vh;
          `
        : css`
            padding: 0 15px;
            border-bottom: 0;
            max-height: 0;
          `}
  }
`
