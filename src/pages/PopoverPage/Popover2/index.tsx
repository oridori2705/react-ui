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

const Popover2 = () => {
  return (
    <>
      <ViewportContextProvider>
        <div>
          <h2>팝오버</h2>
          <h3>
            #2. React<sub>CreatePortal을 이용한 방식</sub>
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
      </ViewportContextProvider>
      <UiExplanation>
        <p>- CreatePortal을 이용한 방법입니다.</p>
        <p>
          - 조건부 렌더링이 존재하고, 컴포넌트 호출시 createPortal을
          사용했습니다.
        </p>
        <p>
          - createPortal로 인해 상대위치가 아닌 절대위치가 필요해
          useStyleInVie에 절대위치 기능을 추가했습니다.
        </p>

        <br />
        <h3>장점</h3>
        <p>- 부모의 overflow:hidden같은 스타일 속성에 영향을 받지 않습니다.</p>
        <p>- </p>
        <br />

        <h3>단점</h3>
        <p>- 상대위치가 되지 않으므로 절대 위치를 위한 계산이 필요합니다.</p>
        <p>- 여전히 Provider를 사용해야 합니다.</p>
        <p>- 현재 popover 내부 요소를 수정할 수가 없습니다.</p>
        <p>- portal할 div요소를 개발자가 작성해줘야 합니다.</p>
      </UiExplanation>
    </>
  )
}

export default Popover2
