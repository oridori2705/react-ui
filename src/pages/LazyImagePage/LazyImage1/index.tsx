import data from '../data'
import LazyImageComponent1 from './LazyImageComponent1'
import { ImageContainer } from './LazyImage1.styled'

const LazyImage1 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>#1. React</h3>
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
    </>
  )
}

export default LazyImage1
