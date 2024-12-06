import { useRef, useState } from 'react'

import { data } from '../data'
import { PopoverButton, PopoverList, PopoverListItem } from '../Popover.styled'
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

const Popover3 = () => {
  return (
    <>
      <div>
        <h2>팝오버</h2>
        <h3>
          #3. React
          <sub>
            CreatePortal을 이용한 방식 + Context API를 사용하지 않는 방식
          </sub>
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
      <div id="popoverRoot" />
      <UiExplanation>
        <p>
          - CreatePortal을 이용한 방법에서 useStyleInView를 Context API가 아닌
          커스텀 훅으로 교체한 방식을 사용했습니다.
        </p>
        <p>
          - Provider를 사용해야하는 번거로움을 해소하기 위해 구현해봤습니다.
        </p>

        <br />
        <h3>장점</h3>
        <p>- Provider를 사용하지 않아도 됩니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - style값을 ref로 저장하기 떄문에 style의 위치가 실시간으로 변하지
          않습니다.(popover를 연 상태에서 스크롤이나 resize시 위치가 실시간으로
          변하지 않음)
        </p>
        <p>- 여전히 Portal할 div 요소를 만들어줘야 함</p>
        <p>- 여전히 popover 내부 요소를 수정할 수 없음</p>
        <p>- popover를 열 때 3번의 렌더링을 하게됩니다.</p>
      </UiExplanation>
    </>
  )
}

export default Popover3
