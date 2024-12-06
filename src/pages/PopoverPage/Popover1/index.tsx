import { useRef, useState } from 'react'

import { data } from '../data'
import { PopoverButton, PopoverList, PopoverListItem } from '../Popover.styled'
import ViewportContextProvider from '@/hooks/viewport/ViewportContext'
import MenuPopover from './MenuPopover'
import UiExplanation from '@/components/UiExplanation'

const ListItem = ({
  id,
  title,
  index
}: {
  id: string
  title: string
  index: number
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [menuOpened, toggleMenu] = useState(false)
  const handleClickButton = () => toggleMenu(true)

  return (
    <PopoverListItem id={id}>
      #{index + 1}. {title}
      <PopoverButton
        onClick={handleClickButton}
        ref={buttonRef}
      />
      {menuOpened && (
        <MenuPopover
          id={index + 1 + ''}
          close={() => toggleMenu(false)}
          wrapperRef={buttonRef}
        />
      )}
    </PopoverListItem>
  )
}

const Popover1 = () => {
  return (
    <>
      <ViewportContextProvider>
        <div>
          <h2>팝오버</h2>
          <h3>
            #1. React<sub>자식요소에 조건부 렌더링으로 기능하는 방식</sub>
          </h3>
          <PopoverList>
            {data.map((item, index) => (
              <ListItem
                {...item}
                index={index}
                key={item.id}
              />
            ))}
          </PopoverList>
        </div>
      </ViewportContextProvider>
      <UiExplanation>
        <p>- 컨텐츠 내부에 자식요소로 popover를 출력하는 방법입니다.</p>
        <p>- 조건부 렌더링을 사용하고 open 상태를 useState로 관리합니다.</p>
        <p>
          - useStyleInView를 이용해 뷰포트에 맞춰 바깥으로 나가지 않도록
          했습니다.
        </p>

        <br />
        <h3>장점</h3>
        <p>- 간단하게 구현이 가능하다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - 만약 각 리스트 아이템에 overflow: hidden이 적용되어있다면 Popover가
          해당 스타일로 인해 잘려나가는 현상이 생깁니다.(내부 자식요소로
          존재하게됨으로써 생기는 문제)
        </p>
      </UiExplanation>
    </>
  )
}

export default Popover1
