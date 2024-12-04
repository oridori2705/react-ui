import styled from '@emotion/styled'

export const PopoverList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const PopoverListItem = styled.li`
  position: relative;
  padding: 20px 40px 20px 20px;
  margin: 10px 0;
  border: 1px solid #eee;
`

export const PopoverButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  border: 0;
  background-color: transparent;
  font-size: 1.3rem;

  &:hover {
    background-color: #c7c7c7;
  }

  &:before {
    content: '\u22ee';
    color: black;
  }
`

export const MenuPopoverOverlay = styled.div`
  &::before {
    content: '';
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`

export const MenuPopoverContainer = styled.ul`
  position: absolute;
  z-index: 2;
  top: 40px;
  right: 5px;
  width: 160px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`

export const MenuItem = styled.li`
  padding: 10px 20px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  transition: background-color ease-out 0.2s;
  cursor: pointer;

  &:first-of-type {
    border-top: 0;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`
