import { Title, TitleSub } from '../ScrollSpy1/ScrollSpy.styled'
import data from '../data'
import ScrollSpy from './ScrollSpyComponent'

const ListItem = ({
  number,
  title,
  description
}: {
  number: number
  title: string
  description: string
}) => {
  return (
    <>
      <p>
        <strong>
          {number}. {title}
        </strong>
      </p>
      <div>
        {description.split('\r\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </>
  )
}

const ScrollSpy1 = () => {
  return (
    <div>
      <Title>
        #2. ScrollSpy<TitleSub>IntersectionObserver를 활용한 방법</TitleSub>
      </Title>
      <ScrollSpy>
        <ScrollSpy.UList>
          {data.map(item => (
            <ScrollSpy.ListItem
              key={item.id}
              ItemId={item.id}
              title={item.title}
              scrollIndex={item.index}>
              <ListItem
                {...item}
                number={item.index + 1}
              />
            </ScrollSpy.ListItem>
          ))}
        </ScrollSpy.UList>
      </ScrollSpy>
    </div>
  )
}
export default ScrollSpy1
