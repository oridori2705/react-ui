import { useCallback, useMemo } from 'react'
import ScrollBox from '../HorizontalScrollBoxPage/HorizontalScrollBox2/ScrollBoxComponent2'
import data from './data'
import LazyImageComponent3 from '../LazyImagePage/LazyImage3/LazyComponent3'
import ReviewItem from './ReviewItem'
import styled from '@emotion/styled'
import { SetGalleryData } from '.'

export type Image = { id: string; thumbnail: string; fullsize: string }

const totalImages: Image[] = data.flatMap(d => d.images || [])

const Reviews = ({ setGalleryData }: { setGalleryData: SetGalleryData }) => {
  const list = useMemo(() => totalImages.slice(0, 10), [])

  const handleTotalItemClick = useCallback(
    (_: unknown, i: number) => () => {
      setGalleryData({
        galleryKey: 'total',
        images: totalImages,
        initialIndex: i
      })
    },
    [setGalleryData]
  )

  return (
    <div>
      <h2>⭐후기⭐</h2>
      <Container>
        <article>
          <h3>📷사진 모아보기</h3>
          <ScrollBox isSetScrollBar={true}>
            {list.map((item, index) => (
              <ScrollBox.Wrapper
                key={item.id}
                index={index}>
                <div onClick={handleTotalItemClick(item, index)}>
                  <LazyImageComponent3
                    src={item.thumbnail}
                    width={160}
                    height={80}
                  />
                </div>
              </ScrollBox.Wrapper>
            ))}
          </ScrollBox>
        </article>

        <article>
          <h3>✍️리뷰</h3>
          <ReviewItemUl>
            {data.map(item => (
              <ReviewItem
                setGalleryData={setGalleryData}
                {...item}
                key={item.id}
              />
            ))}
          </ReviewItemUl>
        </article>
      </Container>
    </div>
  )
}

export default Reviews

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px 30px;
`

const ReviewItemUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 15px;
`
