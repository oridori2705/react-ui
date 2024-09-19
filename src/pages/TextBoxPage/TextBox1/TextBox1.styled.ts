import styled from '@emotion/styled'

export const TextareaContainer = styled.div`
  width: 400px;
  position: relative;
  padding: 10px;
`

export const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  resize: none;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  border-radius: 4px;
`

export const CloneTextarea = styled.textarea`
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 20px);
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
`
export const RootContainer1 = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
`
