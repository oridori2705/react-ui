import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface LineClampTextProps {
  lineToShow: number
  isClamped: boolean
  fullHeight: number
}

export const LineClampContainer = styled.div`
  position: relative;
  margin: 10px 0;
  line-height: 1.67;
`

export const LineClampText = styled.div<LineClampTextProps>`
  white-space: pre-line;
  height: ${({ isClamped, lineToShow, fullHeight }) =>
    isClamped
      ? `min(calc(${lineToShow} * 1.67 * 1em), ${fullHeight}px)`
      : `${fullHeight}px`};
  transition: height 0.5s ease;

  ${props =>
    props.isClamped &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${props.lineToShow};
    `}
`

export const LineClampButtonMore = styled.button<{ isClamped: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: 0;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;

  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent #333 #333 transparent;
    transform: ${({ isClamped }) =>
      isClamped ? 'rotate(45deg)' : 'rotate(-135deg)'};
    transition: transform 0.5s ease;
    vertical-align: middle;
  }
`

export const LineClampTextClone = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 10px;
  top: 10px;
  white-space: pre-line;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
`
