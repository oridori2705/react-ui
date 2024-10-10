import Spinner from '@/components/Spinner'
import { Datum } from '../useInfiniteFetch'
import useInfiniteScroll from '../useInfiniteScroll'
import styled from '@emotion/styled'
import { pickRandom, randomize, waitFor } from '@/utils/randomFn'
import data from '../data'

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
  const { data, state, moreRef } = useInfiniteScroll<Datum>({
    fetchFn: generatePageData
  })

  return (
    <>
      <h2>무한스크롤</h2>
      <h3>#1. React</h3>
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
