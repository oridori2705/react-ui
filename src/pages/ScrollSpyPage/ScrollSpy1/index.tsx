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
              scrollNumber={item.index + 1}>
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

/*
1. 먼저 1번 요소와 2번 요소에서 어느 지점 까지 왔을 때 ScrollSpy의 값이 변화하는지 기준을 정해야한다.
2. 여기서는 1번 요소의 1/2 지점에 왔을 때 2번 요소를 가리키도록 한다.

1. 각 요소의 getBoundingClientRect()를 이용해서 top과 height를 가져온다.
2. top은  scrollTop값과 영향을 받게 된다. -> 즉 뷰포트 기준으로 요소의 Top 값을 가져오는 것이다.
3. 그래서 top에는 top + scrollTop 을 해줘야한다.
4. scrollTop값은 document.scrollingElement.scrollTop을 이용해 가져온다. -> 리사이즈했을 때 바로 반영이 되지않는 문제가 존재
5. offsetTop은 요소의 가장 가까운 Parent 요소로 부터의 상대 좌표라서 범용적으로 사용하려면 top을 사용해야한다.

1. 이제 useEffect를 이용해서 scroll 이벤트가 일어날 때 계산을 해서 현재 어떤 아이템인지 도출하면 된다.

1. 위 과정을 해내면 scroll했을 때 정상적으로 현재 스크롤 위치에 따라 어떤 아이템인지 나타날 것이다.
2. 하지만 ScrollSpy의 가로 스크롤이 현재 아이템에 따라 움직이지 않고 있다.
3. 그래서 ScrollSpy에 ref로 접근해서 아래 코드를 사용한다.
navsRef.current[target.index].scrollIntoView({block:"nearest",inline:"center",behavior:"instant"})

block: "nearest": 스크롤할 요소의 수직 위치를 정의합니다. "nearest"는 요소가 현재 뷰포트 안에 있을 경우 최소한의 스크롤만 하도록 합니다. 즉, 요소가 뷰포트에 일부라도 보이면, 그 위치를 유지하려고 합니다.
inline: "center": 스크롤할 요소의 수평 위치를 정의합니다. "center"는 요소를 뷰포트의 중앙에 위치시키도록 합니다.
behavior: "instant": 스크롤 애니메이션의 동작 방식을 정의합니다. "instant"는 스크롤이 즉시 이루어지도록 하여 애니메이션 없이 바로 스크롤이 완료됩니다.

1. 마지막으로 ScrollSpy를 클릭했을 때 해당 요소로 이동하는 로직이다.
2. 현재 ScrollSpy에 클릭된 아이템으로 scrollIntoView를 하면 안되는 상황이다. (클릭한 지점까지 못가는 현상이 생김)
3. 그래서 window.scrollInto()를 이용했다.
window.scroll({
    top:itemY,
    behavior:"smooth"
})

1. 추가적으로 ScrollSpy는 fixed하게 상위에 붙어있으므로 해당 높이만큼은 떨어져야한다.
2. 각 계산마다 ScrollSpy 네비게이션의 height는 플러스 해줘야한다.

1. 마지막으로 Resize가 일어났을 때 다시 계산이 되도록 ResizeObserver를 사용한다.


모듈화를 위해 아래 코드를 바꿔봤습니다.
  itemsRef.current = data.map((d, i) => {...})

  =>

  const listItems = document.querySelectorAll('ul > li[data-number]')
      itemsRef.current = Array.from(listItems).map((elem, index) => {
        const { top, height } = elem.getBoundingClientRect()
        return {
          elem: elem as HTMLElement,
          top: top + scrollTop,
          height,
          index
        }
      })
이를 위해서 합성 컴포넌트 패턴으로 ul과 li를 꼭 사용하도록 강제하게 했습니다.

문제 1. contextAPI 사용으로 인해 전체가 불필요하게 렌더링됩니다.
문제 2. Ul과 Li라는 합성 컴포넌트 사용을 강제해야합니다.
문제 3. 여전히 네비게이션은 인덱스로만 가능한 문제
*/
