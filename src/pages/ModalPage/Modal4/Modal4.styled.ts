import styled from '@emotion/styled'

export const StyledDialog = styled.dialog`
  justify-content: center;
  position: fixed;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border: 1px solid #242424;
  border-radius: 6px;
  background-color: #fff;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  &::backdrop {
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:not([open]) {
    display: none;
  }
`
