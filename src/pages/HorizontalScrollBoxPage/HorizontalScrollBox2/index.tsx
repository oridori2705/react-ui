import LazyImageComponent3 from '@/pages/LazyImagePage/LazyImage3/LazyComponent3'
import ScrollBox from './ScrollBoxComponent2'
import data from '../data'

const HorizontalScrollBox2 = () => {
  return (
    <>
      <h3>#2. React/합성 컴포넌트 패턴</h3>

      <ScrollBox>
        {data.map((item, index) => (
          <ScrollBox.Wrapper
            key={item.id}
            index={index}>
            <div>
              <LazyImageComponent3
                src={item.imgUrl}
                width={250}
                height={400}
              />
              <span>{item.description}</span>
            </div>
          </ScrollBox.Wrapper>
        ))}
      </ScrollBox>
    </>
  )
}
export default HorizontalScrollBox2
