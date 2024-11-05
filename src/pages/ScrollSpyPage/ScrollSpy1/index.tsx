import ViewportContextProvider from '@/hooks/viewport/ViewportContext'
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
    <ViewportContextProvider>
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
    </ViewportContextProvider>
  )
}
export default ScrollSpy1
