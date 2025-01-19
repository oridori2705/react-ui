import styled from '@emotion/styled'
import LazyImageComponent3 from '../LazyImagePage/LazyImage3/LazyComponent3'
import { Image } from './Reviews'
import { useCallback } from 'react'
import { SetGalleryData } from '.'

interface ReviewItemProps {
  id: string
  number: number
  name: string
  text: string
  images?: Image[]
  setGalleryData: SetGalleryData
}

const ReviewItem = ({
  id,
  name,
  text,
  images = [],
  setGalleryData
}: ReviewItemProps) => {
  const imageLength = images.length

  const openGallery = useCallback(() => {
    setGalleryData({
      galleryKey: id,
      images,
      initialIndex: 0
    })
  }, [id, images, setGalleryData])

  return (
    <ReviewItemLi>
      <NameStyle>🗨️{name}</NameStyle>
      {imageLength > 0 && (
        <ReviewImage onClick={openGallery}>
          <LazyImageComponent3
            src={images[0].thumbnail}
            width={150}
            height={80}
          />
          {imageLength > 1 && (
            <ImageCountSpan>+{imageLength - 1}</ImageCountSpan>
          )}
        </ReviewImage>
      )}
      <TextStyle>{text}</TextStyle>
    </ReviewItemLi>
  )
}

export default ReviewItem

const ReviewItemLi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`
const NameStyle = styled.p`
  font-size: 16px;
  font-weight: 700;
`
const TextStyle = styled.p`
  font-size: 15px;
  font-weight: 800;
  color: gray;
`

const ReviewImage = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  border-radius: 10px;
  overflow: hidden;
`
const ImageCountSpan = styled.span`
  position: absolute;
  bottom: 10px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  color: white;
  padding: 3px;
  border-radius: 5px;
`
