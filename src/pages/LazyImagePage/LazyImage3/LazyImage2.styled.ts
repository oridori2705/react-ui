import styled from '@emotion/styled'
import { ImageContentProps } from '../LazyImage1/LazyImage1.styled'

export const ImageContent3 = styled.img<ImageContentProps>`
  filter: ${({ load }) => (load ? 'blur(0)' : 'blur(15px)')};
  transition: filter 0.7s;
`
