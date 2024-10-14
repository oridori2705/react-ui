import Spinner from '@/components/Spinner'
import useInfiniteFetch, { Datum } from '../useInfiniteFetch'
import useInfiniteScroll from '../useInfiniteScroll'
import styled from '@emotion/styled'
import { pickRandom, randomize, waitFor } from '@/utils/randomFn'
import data from '../data'
import { FlexDiv } from '@/pages/LazyImagePage/LazyImage1'
import UiExplanation from '@/components/UiExplanation'
import {
  StyledCode,
  StyledStrong,
  StyledStrongNegative,
  StyledStrongPositive
} from '@/components/UiExplanation/UiExplanation.styled'

const ListItem = ({
  id,
  number,
  title,
  description
}: Datum & { number: number }) => {
  return (
    <ListItemContainer data-id={id}>
      <Title>
        <strong>
          {number}. {title}
        </strong>
      </Title>
      <Description>{description}</Description>
    </ListItemContainer>
  )
}

const InfiniteScroll1 = () => {
  const { data, state, fetchNextPage } = useInfiniteFetch({
    fetchFn: generatePageData
  })

  const { ref: moreRef } = useInfiniteScroll<HTMLDivElement>(fetchNextPage)

  return (
    <>
      <h2>무한스크롤</h2>
      <h3>#1. React</h3>
      <FlexDiv>
        <div style={{ width: '45%' }}>
          <ul>
            {data.map((page, i) =>
              page.map((item, j) => (
                <ListItem
                  {...item}
                  number={i * 20 + j + 1}
                  key={`${i}_${j}`}
                />
              ))
            )}
          </ul>
          <div ref={moreRef} />
          {state === 'loading' && <Spinner width={50} />}
        </div>
        <div>
          <UiExplanation>
            <p>
              - <StyledStrong>IntersectionObserver를 이용</StyledStrong>해
              구현한 방법입니다.
            </p>
            <p>
              -{' '}
              <StyledStrongNegative>
                이미지 지연 로딩의 IntersectionObserver와 다른 점
              </StyledStrongNegative>
              이 있는데{' '}
              <StyledStrongPositive>
                IntersectionObserver에 등록한 Callback함수는 데이터 fetch
                함수로, 감지됐을 때 바로 실행되도록 했습니다.
              </StyledStrongPositive>
            </p>
            <p>
              - 이미지 지연 로딩의 IntersectionObserver은 등록된 callback함수가
              useState의 set함수로 감지됐을 때 entry를 state에 저장하는데 이때
              상태 변경으로{' '}
              <StyledStrongNegative>불필요한 렌더링</StyledStrongNegative>이
              일어납니다.
            </p>
            <p>
              - 또한 entry의 isIntersecting이 변경된 것을 확인하고 데이터
              fetch함수를 실행하기 때문에 이 또한 불필요한 렌더링이 일어납니다.
            </p>
            <p>
              - 그래서 기존 렌더링이{' '}
              <StyledCode>
                idle -&gt; idle -&gt; loading -&gt; fetched -&gt; fetched
              </StyledCode>{' '}
              로 5번 일어나는 문제가 있었습니다.
            </p>
            <p>
              - 이를 <StyledCode>idle -&gt; loading -&gt; fetched</StyledCode>{' '}
              로 3번만 렌더링이 일어나도록 했습니다.
            </p>
            <br />
            <p>
              - TanstackQuery의 useInfiniteQuery와 유사한{' '}
              <StyledStrong>useInfiniteFetch 훅</StyledStrong>을 구현했습니다.
            </p>
            <p>
              <StyledCode>
                {`const { data, state, fetchNextPage } = useInfiniteFetch({ fetchFn: dataFetchFn})`}
              </StyledCode>
            </p>
          </UiExplanation>
        </div>
      </FlexDiv>
    </>
  )
}
export default InfiniteScroll1

const ListItemContainer = styled.li`
  list-style: none;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: #333;
`

const Description = styled.div`
  font-size: 1rem;
  color: #666;
`

const generatePageData = async () => {
  const randomData = pickRandom({ data, length: 20 })
  await waitFor(
    randomize({
      min: 300,
      max: 1500,
      step: 50
    })
  )
  return randomData
}
