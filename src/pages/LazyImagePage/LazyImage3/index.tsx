import { ImageContainer } from '../LazyImage1/LazyImage1.styled'
import data from '../data'
import LazyImageComponent3 from './LazyComponent3'

const LazyImage3 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>
        #3. React{' '}
        <sub>이미지에 blur transition 효과 적용 / 작은 이미지 제외</sub>
      </h3>
      <ImageContainer>
        {data.map((url, index) => (
          <LazyImageComponent3
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

export default LazyImage3
