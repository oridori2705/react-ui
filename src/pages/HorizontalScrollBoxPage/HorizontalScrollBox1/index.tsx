import LazyImageComponent1 from '@/pages/LazyImagePage/LazyImage1/LazyImageComponent1'
import { useRef } from 'react'
import data from '../data'
import ForwardedScrollBox from './ScrollBoxComponent'

export const Item = ({
  id,
  description,
  imgUrl
}: {
  id: string
  description: string
  imgUrl: string
}) => (
  <div data-id={id}>
    <LazyImageComponent1
      src={imgUrl}
      width={250}
      height={400}
    />
    <span>{description}</span>
  </div>
)

const HorizontalScrollBox1 = () => {
  const ref = useRef()
  return (
    <>
      <h3>#1. React</h3>
      <ForwardedScrollBox
        list={data}
        Item={Item}
        ref={ref}
      />
    </>
  )
}
export default HorizontalScrollBox1
