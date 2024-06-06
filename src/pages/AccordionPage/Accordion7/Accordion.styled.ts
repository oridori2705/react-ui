import styled from '@emotion/styled'

export const AccordionContainer = styled.ul`
  border: 1px solid #ccc;
  border-bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;

  details {
    transition: max-height 3s ease;
    overflow: hidden;
  }

  details:not([open]) {
    transition: max-height 3s ease;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    height: 50px;
    max-height: 50px;
  }

  details[open] {
    transition: max-height 3s ease;
    max-height: 100vh;
  }

  details:not([open]) summary {
    cursor: pointer;
  }

  details[open] summary {
    background-color: #ace;
    padding: 15px;
    border-bottom-width: 0;
    cursor: pointer;
  }

  summary::marker {
    content: '+ ';
  }
  details[open] summary::marker {
    content: '- ';
  }
`
