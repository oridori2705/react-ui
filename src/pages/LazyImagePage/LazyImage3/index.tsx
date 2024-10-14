import UiExplanation from '@/components/UiExplanation'
import { FlexDiv } from '../LazyImage1'
import { ImageContainer } from '../LazyImage1/LazyImage1.styled'
import data from '../data'
import LazyImageComponent3 from './LazyComponent3'
import {
  StyledStrong,
  StyledStrongNegative
} from '@/components/UiExplanation/UiExplanation.styled'

const LazyImage3 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>
        #3. React{' '}
        <sub>이미지에 blur transition 효과 적용 / 작은 이미지 제외</sub>
      </h3>
      <FlexDiv>
        <ImageContainer>
          {data.map(url => (
            <LazyImageComponent3
              src={url}
              key={url}
              width={600}
              height={320}
            />
          ))}
        </ImageContainer>
        <UiExplanation>
          <p>
            -{' '}
            <StyledStrong>
              화면에 감지되었을 때 잠시 블러처리 이후 이미지를 보여지도록 하는
              방법
            </StyledStrong>
            입니다.
          </p>
          <p>
            - 첫 번째 방법에서 <StyledStrong>블러 효과만 추가</StyledStrong>해
            사용자 경험을 높였습니다.
          </p>
          <p>
            - 뷰포트에 들어온 요소를 직접 로드하므로, 불필요한 리소스 로드를
            줄일 수 있습니다. 이는 LCP를 개선하는 데 긍정적입니다.
          </p>
          <br />
          <p>
            <StyledStrongNegative>단점</StyledStrongNegative>
          </p>
          <p>
            - 사용자가 페이지를 스크롤할 때까지 이미지가 로드되지 않으므로, FCP
            측면에서 초기 콘텐츠가 늦게 표시될 수 있습니다. 이는 사용자의 첫
            인상에 부정적인 영향을 미칠 수 있습니다.
          </p>
          <p>
            - 작은 이미지를 불러오는 방법과 기존 방법의 FCP는 동일하지만 원본
            이미지로 전환이 자연스러워 사용자 경험이 향상된다는 장점이 있는
            것으로 판단했습니다.
          </p>
        </UiExplanation>
      </FlexDiv>
    </>
  )
}

export default LazyImage3
