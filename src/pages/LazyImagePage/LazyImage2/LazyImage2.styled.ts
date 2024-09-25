import styled from '@emotion/styled'
import { ImageContentProps } from '../LazyImage1/LazyImage1.styled'

export const ImageContent2 = styled.img<ImageContentProps>`
  opacity: ${({ load }) => (load ? 1 : 0)};
  transition: opacity 0.7s ease-in-out;
`

export const Container = styled.div`
  background-color: rgb(207, 207, 207);
  background-size: 100% 100%;
  backdrop-filter: blur(10px);
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`
