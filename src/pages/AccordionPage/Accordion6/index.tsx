import { useEffect, useRef, useState } from 'react'
import data from '../data'
import {
  AccordionContainer,
  AccordionItemLi,
  AccordionTab
} from './Accordion.styled'
import UiExplanation from '../../../components/UiExplanation'
import {
  StyledCode,
  StyledStrongNegative,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle
}: {
  id: string
  title: string
  description: string
  current: boolean
  toggle: () => void
}) => {
  const descRef = useRef<HTMLDivElement>(null)

  //descRef로 연결한 요소에 beforematch라는 이벤트를 등록해야하는데
  //beforematch는 HTML에서 새로 등장한 기능이다 보니 React가 반영을 못하고 있다.
  //그래서 addEventListener로 등록을 해준 것이다.
  useEffect(() => {
    const node = descRef.current
    if (node) {
      node.addEventListener('beforematch', toggle)
    }
    return () => {
      if (node) node.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  //원래 HIDDEN이 아닌 hidden으로 해야하는데 React에는 "until-found"라는 것이 아직 반영이 안되어있어서 없애버리는 문제가 있었는데
  //HTML이 대소문자를 구분안하는 꼼수로 until-found를 인식하게 했다.
  //또한 현재 styled-component는 HIDDEN속성은 되고있지만 beforematch 이벤트가 작동이 안되고 있다.
  //그래서 description부분은 div 태그를 사용해서 구현했다.
  return (
    <AccordionItemLi
      current={current}
      key={id}>
      <AccordionTab
        current={current}
        onClick={toggle}>
        {title}
      </AccordionTab>
      <div
        className="description"
        ref={descRef}
        HIDDEN={current ? undefined : 'until-found'}>
        {description}
      </div>
    </AccordionItemLi>
  )
}

const Accordion6 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)
  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }

  return (
    <>
      <h3>
        #6. React<sub>ctrl+F 검색 가능</sub>
      </h3>
      <AccordionContainer>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </AccordionContainer>
      <UiExplanation>
        <p>
          기존의 아코디언들은 ctrl + F를 이용해 내부 요소들을 찾을 때 찾아지긴
          하지만{' '}
          <StyledStrongNegative>
            아코디언이 자동으로 열리지 않았습니다.
          </StyledStrongNegative>
        </p>
        <p>
          그래서{' '}
          <StyledStrongPositive>
            ctrl + F를 하게 된다면 해당되는 아코디언이 자동으로 열리는 기능을
            구현
          </StyledStrongPositive>
          했습니다.
        </p>
        <br />
        <p>
          1. 먼저 <StyledCode>beforematch는</StyledCode> 이벤트를 각{' '}
          <StyledCode>description에</StyledCode> 등록해야합니다.
        </p>
        <p>
          - <StyledCode>beforematch는</StyledCode> HTML에서 새로 등장한 기능이다
          보니 React가 반영을 못하고 있습니다.
        </p>
        <p>
          - 그래서 <StyledCode>addEventListener()</StyledCode> 로 등록을
          해줍니다.
        </p>
        <br />
        <p>
          2. 그리고 <StyledCode>description</StyledCode> 요소에{' '}
          <StyledCode>hidden</StyledCode> 속성을 부여하고, 요소가 보이지 않을 때{' '}
          <StyledCode>until-found</StyledCode> 속성을 부여합니다.
        </p>
        <p>
          - <StyledCode>hidden</StyledCode>은 원래 " 해당 요소가 아직, 또는 더
          이상 관련이 없음을 나타내는 불리언 특성입니다. " 였습니다.
        </p>
        <p>
          - 그래서 요소가 그냥 아예 안보이게 하는 것이었는데 새로운 속성이
          추가되었습니다.
        </p>

        <br />
        <h3>🤔 추가 설명</h3>
        <p>
          - <StyledCode>[hidden="until-found"]</StyledCode>는 HTML에 추가된 가장
          최신 스펙 중 하나로, 숨겨진 영역의 콘텐츠를 검색하고 일치하는 내용이
          있으면 <StyledCode>beforematch</StyledCode> 이벤트를{' '}
          <StyledCode>addEventListener()</StyledCode>로 받아 표시할 수 있다.{' '}
        </p>
        <p>- 현재는 Chrome 102 이후의 브라우저에서만 사용 가능하다.</p>
        <p>
          - 일반적으로 콘텐츠를 가릴 때에는{' '}
          <StyledCode>display: none</StyledCode>을 적용하거나, React 같은 뷰
          프레임워크를 쓰면 <StyledCode>isOpen && ...</StyledCode> 같이 아예
          DOM을 렌더링하지 않게 만든다.
        </p>
        <p>
          - <StyledCode>[hidden="until-found"]</StyledCode>는{' '}
          <StyledCode>display: none</StyledCode> 대신{' '}
          <StyledCode>content-visibility:hidden</StyledCode>을 적용하여 콘텐츠
          자체는 검색이 가능하도록 만든다.{' '}
        </p>
        <p>
          - 개발자들은 대신 아래와 같이 해당 속성이 적용되어 있을 때에 CSS로
          내용을 가려주게끔 작업을 해야한다.
        </p>
      </UiExplanation>
    </>
  )
}

export default Accordion6

/* 참고: https://hiddenest.dev/accessible-accordion */
