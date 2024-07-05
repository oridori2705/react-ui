import styled from '@emotion/styled'
import { TabProps } from '../TabMenu1/TabMenu1.styled'

export const TabMenu3Ul = styled.ul`
  position: relative;
  width: 90%;
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  background-color: #e8f5e9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px;
  margin-bottom: 100px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid #dcdcdc;
`
export const TabMenu3ItemLi = styled.li`
  flex: 1;
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const TabMenu3Title = styled.div<TabProps>`
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  background-color: ${props => (props.current ? '#a5d6a7' : 'transparent')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #c8e6c9;
    color: #388e3c;
  }
`

export const TabMenu3Description = styled.div<TabProps>`
  position: absolute;
  padding: 20px;
  background-color: #ffffff;
  top: 100%;
  left: 0;
  width: 100%;
  display: ${props => (props.current ? 'block' : 'none')};
  border: 1px solid #dcdcdc;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
