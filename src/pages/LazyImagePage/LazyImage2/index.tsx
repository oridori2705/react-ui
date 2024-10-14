import UiExplanation from '@/components/UiExplanation'
import { FlexDiv } from '../LazyImage1'
import data from '../data'
import LazyImageComponent2 from './LazyImageComponent2'
import { ImageContainer } from '../LazyImage1/LazyImage1.styled'
import {
  StyledStrong,
  StyledStrongNegative
} from '@/components/UiExplanation/UiExplanation.styled'

const LazyImage2 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>
        #2. React<sub>작은 이미지 미리 로딩</sub>
      </h3>
      <FlexDiv>
        <ImageContainer>
          {data.map((url: string, index: number) => (
            <LazyImageComponent2
              src={url}
              width={600}
              height={320}
              key={index}
            />
          ))}
        </ImageContainer>
        <UiExplanation>
          <p>
            - 모든 이미지 요소들의
            <StyledStrong>
              작은 이미지를 미리 불러온 뒤 화면에 감지됐을 때 원본 크기의
              이미지를 보여주는 방법
            </StyledStrong>
            입니다.
          </p>
          <p>
            - 작은 이미지는 용량이 작기 때문에 다운로드하는 데 필요한 시간과
            데이터가 적습니다. 이를 통해 사용자가 페이지를 스크롤할 때 콘텐츠가
            즉시 표시됩니다. 이는 FCP를 개선하는 데 도움이 됩니다.
          </p>
          <p>
            - 또한 원본 이미지를 로드할 때 작은 이미지에서 원본 이미지로의
            전환이 자연스러워 사용자 경험이 향상됩니다.
          </p>
          <br />
          <p>
            <StyledStrongNegative>단점</StyledStrongNegative>
          </p>
          <p>
            - 추가적인 네트워크 요청이 발생하기 때문에, 원본 이미지를 불러오는
            데 시간이 걸릴 수 있습니다. 이 부분에서 LCP가 다소 영향을 받을 수
            있습니다.
          </p>
          <p>- 작은 이미지를 초기에 모두 불러와야 하는 문제점이 존재합니다.</p>
        </UiExplanation>
      </FlexDiv>
    </>
  )
}

export default LazyImage2
