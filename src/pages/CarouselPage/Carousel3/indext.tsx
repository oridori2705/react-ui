import data from '../data'
import CarouselComponent3 from './CarouselComponent3'

const Carousel3 = () => {
  return (
    <div>
      <CarouselComponent3
        childSize={500}
        groupGap={15}
        useButton>
        {data.map((url, index) => (
          <img
            key={index}
            src={url}
            width="600"
            height="320"
          />
        ))}
      </CarouselComponent3>
    </div>
  )
}

export default Carousel3
