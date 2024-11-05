import { Title, TitleSub } from '../ScrollSpy1/ScrollSpy.styled'
import ScrollSpy from '../ScrollSpy3/ScrollSpyComponent'
import data from '../data'

const ScrollSpy3 = () => {
  return (
    <div>
      <Title>
        #3. ScrollSpy
        <TitleSub>
          IntersectionObserver 방식 + Title Props로 Nav 범용성있게 사용하는 방법
        </TitleSub>
      </Title>
      <ScrollSpy>
        <ScrollSpy.UList>
          {data.map(item => (
            <ScrollSpy.ListItem
              key={item.id}
              ItemId={item.id}
              scrollIndex={item.index}
              title={item.title}>
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

export default ScrollSpy3

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
