import styled from '@emotion/styled'

export const TabMenu5Container = styled.ul`
  position: relative;
  width: 90%;
  display: flex;
  padding: 0;
  background-color: #e8f5e9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  margin-bottom: 100px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid #dcdcdc;
`

export const Item = styled.li`
  flex: 1;
  display: flex;
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const TabMenuInput = styled.input`
  display: none;

  &:checked {
    + label {
      background-color: #a5d6a7;
    }

    ~ div {
      display: block;
    }
  }
`
export const TabMenu5Title = styled.label`
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #c8e6c9;
    color: #388e3c;
  }
`

export const TabMenu5Description = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: none;
  padding-top: 20px;
  border: 1px solid #dcdcdc;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
