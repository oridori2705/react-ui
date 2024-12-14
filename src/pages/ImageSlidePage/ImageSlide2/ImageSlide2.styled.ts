import styled from '@emotion/styled'
import { ImageItem } from '../ImageSlide1/ImageSlide1.styled'

export const ImageSlide3Ul = styled.ul`
  height: 500px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  overscroll-behavior: contain;
`

export const ImageItem3 = styled(ImageItem)`
  scroll-snap-align: start;
`
