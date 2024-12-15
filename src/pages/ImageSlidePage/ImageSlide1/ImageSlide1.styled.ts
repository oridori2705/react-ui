import styled from '@emotion/styled'

export const ImageSlideContainer = styled.div`
  position: relative;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 600px;
  height: 320px;
  overflow: hidden;
`

export const ImageList = styled.ul<{ moveLeft: number }>`
  position: relative;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  left: ${({ moveLeft }) => `${moveLeft}px`};
`

export const ImageItem = styled.li`
  position: relative;
  padding: 0;
  margin: 0;

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
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  border: 0;
  outline: 0;
  opacity: 0.3;

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
`

export const NavLeft = styled(NavButton)`
  left: 10px;

  &::before,
  &::after {
    left: 11px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(135deg);
  }
`

export const NavRight = styled(NavButton)`
  right: 10px;

  &::before,
  &::after {
    right: 11px;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(-135deg);
  }
`

export const ImageSlide1Ul = styled(ImageList)`
  transition: left ease-out 0.5s;
`

export const ImageSlide4 = styled.div`
  height: 360px;
`
