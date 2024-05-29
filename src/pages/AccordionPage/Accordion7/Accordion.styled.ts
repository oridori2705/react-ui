import styled from '@emotion/styled'

export const AccordionContainer = styled.ul`
  border: 1px solid #ccc;
  border-bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;

  details[open] summary {
    background-color: #ace;
    padding: 15px;
    border-bottom-width: 0;
  }

  details[open] .description {
    padding: 15px;
    border-bottom-width: 0;
  }

  summary {
    padding: 15px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }

  summary::marker {
    content: '+ ';
  }
  details[open] summary::marker {
    content: '- ';
  }
`
