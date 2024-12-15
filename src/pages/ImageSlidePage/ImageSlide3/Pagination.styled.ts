import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PageList = styled.ul`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
`

export const PageButton = styled.li<{ isCurrent: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  padding: 25px 10px 10px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    border: 1px solid #000;
    border-radius: 50%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-weight: 700;

      &::before {
        background-color: #000;
      }
    `}
`
