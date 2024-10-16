import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ScrollBoxProps {
  wrapperClassName?: string
}

interface ItemProps {
  isCurrent?: boolean
}

interface NavButtonProps {
  isActive?: boolean
}

interface ULContainerProps {
  isSetScrollBar?: boolean
}

interface GradientOverlayProps {
  showLeft: boolean
  showRight: boolean
}
export const ScrollBoxContainer = styled.div<ScrollBoxProps>`
  position: relative;

  ${({ wrapperClassName }) =>
    wrapperClassName &&
    `
    ${wrapperClassName}
  `}
`

export const GradientOverlay = styled.div<GradientOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, ${props => (props.showLeft ? 0.5 : 0)}) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(0, 0, 0, ${props => (props.showRight ? 0.5 : 0)}) 100%
  );
`

export const UlContainer = styled.ul<ULContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  overflow-x: ${({ isSetScrollBar }) => (isSetScrollBar ? 'auto' : 'hidden')};
`

export const BoxList = styled.li<ItemProps>`
  flex: 0;
  margin-left: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      background-color: yellow;
    `}
  &:nth-of-type(2) {
    margin-left: 0;
  }
  img {
    border-radius: 5px;
  }
  span {
    display: block;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }
`

export const Observer = styled.li`
  flex: 0 0 1px;
  margin-right: -1px;
`

export const NavButton = styled.button<NavButtonProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 5px;
  display: none;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      display: block;
      opacity: 0.4;
      transition: opacity ease-out 0.2s;

      &:hover {
        opacity: 1;
      }
    `}
`

export const PrevNavButton = styled(NavButton)`
  left: 0;
  &::before {
    content: '';
    top: calc(50% - 10px);
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #fff;
    left: 13px;
    transform-origin: 0 100%;
    rotate: 30deg;
  }
  &::after {
    content: '';
    top: calc(50% + 2px);
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #fff;
    left: 13px;
    transform-origin: 0 0;
    rotate: -30deg;
  }
`

export const NextNavButton = styled(NavButton)`
  right: 0;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #fff;
    right: 13px;
    top: calc(50% - 10px);
    transform-origin: 100% 100%;
    rotate: -30deg;
  }

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #fff;
    right: 13px;
    top: calc(50% + 2px);
    transform-origin: 100% 0;
    rotate: 30deg;
  }
`
