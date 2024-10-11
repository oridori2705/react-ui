import data from '../data'
import LazyImageComponent1 from './LazyImageComponent1'
import { ImageContainer } from './LazyImage1.styled'
import UiExplanation from '@/components/UiExplanation'
import styled from '@emotion/styled'
import {
  StyledCode,
  StyledStrong
} from '@/components/UiExplanation/UiExplanation.styled'

const LazyImage1 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>#1. React</h3>
      <FlexDiv>
        <ImageContainer>
          {data.map((url, index) => (
            <LazyImageComponent1
              src={url}
              key={index}
              width={600}
              height={320}
            />
          ))}
        </ImageContainer>
        <UiExplanation>
          <p>
            - <StyledStrong>IntersectionObserver를 사용</StyledStrong>해 이미지
            지연로딩을 구현했습니다.
          </p>
          <p>
            - 만약 이미지 요소가 뷰포트에 감지된다면
            <StyledCode>
              imgRef.current!.setAttribute(&apos;src&apos;, src)
            </StyledCode>
            를 이용해서 src에 이미지를 삽입해주는 방식입니다.
          </p>
          <p>
            - 이때 {'<'}img{'>'}에 만약 loading 속성이 있다면{' '}
            <StyledCode>loading = &apos;lazy&apos;</StyledCode>를 이용하도록
            구현했습니다.
          </p>
        </UiExplanation>
      </FlexDiv>
    </>
  )
}

export default LazyImage1

export const FlexDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
`
