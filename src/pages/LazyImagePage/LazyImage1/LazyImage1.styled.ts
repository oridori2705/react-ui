import styled from '@emotion/styled'

export const ImageContainer = styled.div`
  width: 700px;
  border: 1px solid #ccc;
  padding: 10px; /* 내부 여백 */
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export interface ImageContentProps {
  load: boolean
}

export const ImageContent = styled.img<ImageContentProps>`
  background-color: ${({ load }) => load && '#cab'};
`
