import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const slideLeftCurrent = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`

const slideLeftNext = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`

const slideRightCurrent = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`

const slideRightNext = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  width: 600px;
  height: 400px;
  overflow: hidden;
`

export const Container = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 320px;
`

export const NavButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 50%;
  border: 0;
  outline: 0;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 6px;
    height: 17px;
    top: 5px;
    background-color: #fff;
    transform-origin: 3px 14px;
  }

  &:disabled {
    background-color: red;
  }

  ${({ direction }) =>
    direction === 'left' &&
    css`
      left: 10px;

      &::before {
        left: 11px;
        transform: rotate(45deg);
      }

      &::after {
        left: 11px;
        transform: rotate(135deg);
      }
    `}

  ${({ direction }) =>
    direction === 'right' &&
    css`
      right: 10px;

      &::before {
        right: 11px;
        transform: rotate(-45deg);
      }

      &::after {
        right: 11px;
        transform: rotate(-135deg);
      }
    `}
`

export const Item = styled.li<{
  current: boolean
}>`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  left: 0;
  transform: ${({ current }) =>
    current ? `translateX(0)` : `translateX(-200%)`};
  transition: transform 0.3s;

  img {
    display: block;
  }

  span {
    position: absolute;
    display: block;
    left: 10px;
    top: 10px;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 3px 10px;
  }

  &.left_current {
    animation: ${slideLeftCurrent} ease-out 0.3s forwards;
  }
  &.left_next {
    animation: ${slideLeftNext} ease-out 0.3s forwards;
  }
  &.right_current {
    animation: ${slideRightCurrent} ease-out 0.3s forwards;
  }
  &.right_next {
    animation: ${slideRightNext} ease-out 0.3s forwards;
  }
  &.current {
    transform: translateX(0);
  }
`
