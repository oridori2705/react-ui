import styled from '@emotion/styled'

export interface TabProps {
  isFirst?: boolean
  current: boolean
}

export interface DescriptionProps {
  current: boolean
}

export const TabContainer = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  margin: 30px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
`

export const TabUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #dcdcdc;
  background-color: #e8f5e9;
`

export const TabLi = styled.li<TabProps>`
  flex: 1;
  box-sizing: border-box;
  padding: 15px 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  border-left: ${props => (props.isFirst ? 'none' : '1px solid #dcdcdc')};
  background-color: ${props => (props.current ? '#a5d6a7' : 'transparent')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #c8e6c9;
    color: #388e3c;
  }
`

export const TabDescription = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid #dcdcdc;
`
