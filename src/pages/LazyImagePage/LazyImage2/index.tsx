import data from '../data'
import LazyImageComponent2 from './LazyImageComponent'

const LazyImage2 = () => {
  return (
    <>
      <h2>지연로딩</h2>
      <h3>
        #2. React<sub>작은 이미지 미리 로딩</sub>
      </h3>
      {data.map((url: string, index: number) => (
        <LazyImageComponent2
          src={url}
          width={600}
          height={320}
          key={index}
        />
      ))}
    </>
  )
}

export default LazyImage2
