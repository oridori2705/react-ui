import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CarouselWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 320px;
  perspective: 1000px;
`

export const Container = styled.ul`
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 600px;
  height: 320px;
  transform-style: preserve-3d;
  transition: transform 1s;
`

export const NavButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  opacity: 0.3;
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

export const Item = styled.li<{ current: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 320px;
  margin: 5px;
  padding: 0;
  transform-style: preserve-3d;
  transition: transform 1s;
  opacity: 0.8;
`
