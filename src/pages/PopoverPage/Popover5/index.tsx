import { useRef, useState } from 'react'

import { data } from '../data'
import {
  MenuItem,
  PopoverButton,
  PopoverList,
  PopoverListItem
} from '../Popover.styled'

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
      <MenuPopover
        opened={menuOpened}
        close={() => toggleMenu(false)}
        wrapperRef={buttonRef}>
        <MenuItem>스레드의 댓글</MenuItem>
        <MenuItem>메시지 전달</MenuItem>
        <MenuItem>나중을 위해 저장</MenuItem>
        <MenuItem>읽지 않음으로 표시</MenuItem>
        <MenuItem>삭제</MenuItem>
      </MenuPopover>
    </PopoverListItem>
  )
}

const Popover5 = () => {
  return (
    <>
      <div>
        <h2>팝오버</h2>
        <h3>
          #5. React<sub>CreatePortal을 이용한 방식 + 단점 개선</sub>
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
      <UiExplanation>
        <p>
          - 조건부 렌더링을 사용해야하는 번거로움을 개선하기 위해 popover
          내부에서 처리하도록 했습니다.
        </p>
        <p>
          - Portal할 공간을 개발자가 작성해야하는 번거로움을 개선하기 위해
          popover 내부에서 처리하도록 했습니다.
        </p>
        <p>- popover 내부를 수정할 수 있도록 children Node를 활용했습니다.</p>
        <p>
          - 기존에 open 상태 변경 -{'>'} MenuPopover 렌더링 -{'>'}{' '}
          createPortal로 인한 DOM추가로 랜더링 으로 인해 3번의 렌더링을
          했었습니다.
        </p>
        <p>
          - 이를 createPortal에 단축평가(&&)로 조건부렌더링을 간소화했고, open
          상태변경 -{'>'} createPortal로 인한 DOM추가로 랜더링 으로 2번의
          렌더링만 진행됩니다.
        </p>
        <br />

        <h3>장점</h3>
        <p>- Popover 두 번째 방법에서 존재하던 단점들을 개선했습니다.</p>
        <br />

        <h3>단점</h3>
        <p>
          - popover 내부에서 useStyleInView의 needUpdate 매개변수를 사용해야
          합니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default Popover5
