import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const NavContainer = styled.div`
  position: sticky;
  box-sizing: border-box;
  top: -60px;
`

export const Title = styled.h3`
  margin: 0;
  padding: 0 20px;
  height: 60px;
  font-size: 1.5rem;
  line-height: 60px;
  top: 0;
  background-color: #f0f0f0;
`

export const Nav = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  height: 50px;
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  list-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid #555;
  background-color: #f0f0f0;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const NavItem = styled.li<{ $isCurrent: boolean }>`
  button {
    display: block;
    line-height: 44px;
    padding: 0 15px;
    border: 0;
    color: #666;
    font-size: 1.25rem;
    background-color: transparent;
    transition: ease-out 0.2s;

    &:hover {
      background-color: #ccc;
    }
  }

  ${props =>
    props.$isCurrent &&
    css`
      button {
        font-weight: 700;
        color: #fff;
        background-color: #479;
      }
    `}
`
