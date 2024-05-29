import styled from '@emotion/styled'

export const AccordionContainer = styled.ul`
  border: 1px solid #ccc;
  border-bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`
export const AccordionLabel = styled.label`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  display: block;
  cursor: pointer;
  &::before {
    content: '+';
    margin: 0 8px 0 -5px;
  }
  input:checked + & {
    background-color: #ace;
    &::before {
      content: '-';
    }
  }
`
export const AccordionItemLi = styled.li`
  overflow: hidden;
  background-color: '#ace';
`

export const AccordionItemInput = styled.input`
  display: none;
`

export const AccordionDescription = styled.div`
  padding: 0 15px;
  border-bottom-width: 0;
  max-height: 0;
  transition: all 0.3s;
  background-color: #eff;
  input:checked ~ & {
    //styled-component에는 Input 내에서 형제 요소를 선택하는 방법은 없는 듯
    padding: 15px;
    border-bottom-width: 1px;
    max-height: 300px;
  }
`
