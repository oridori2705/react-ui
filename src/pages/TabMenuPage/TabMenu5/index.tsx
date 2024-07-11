import data from '../data'

import UiExplanation from '../../../components/UiExplanation'

import {
  Item,
  LinkTagStyle,
  TabMenu5Container,
  TabMenu5Description,
  TabMenu5Title,
  TabMenuInput
} from './TabMenu5.styled'
import { Link } from 'react-router-dom'
import {
  StyledStrong,
  StyledStrongPositive
} from '../../../components/UiExplanation/UiExplanation.styled'

const TabItem = ({
  id,
  title,
  description,
  initialChecked
}: {
  id: string
  title: string
  description: string
  initialChecked: boolean
}) => {
  return (
    <Item key={id}>
      <TabMenuInput
        type="radio"
        name={'tabmenu'}
        id={id}
        defaultChecked={initialChecked}
      />
      <TabMenu5Title htmlFor={id}>{title}</TabMenu5Title>
      <TabMenu5Description>{description}</TabMenu5Description>
    </Item>
  )
}

const TabMenu5 = () => {
  return (
    <>
      <h3>
        #3. React<sub>input/radio를 이용해서 탭 메뉴 구현</sub>
      </h3>
      <TabMenu5Container>
        {data.map((d, i) => (
          <TabItem
            {...d}
            key={d.id}
            initialChecked={i === 0}
          />
        ))}
      </TabMenu5Container>
      <UiExplanation>
        <p>
          - <StyledStrong>input/radio를 이용</StyledStrong>해 탭 메뉴
          구현했습니다.
        </p>
        <p>
          -
          <StyledStrongPositive>
            내부 상태를 사용하지 않고, 효울적으로 사용할 수 있는 방법입니다.
          </StyledStrongPositive>
        </p>
        <p>
          - 이 방법 또한 스크린 리더가 의도치않은 순서로 읽는 접근성 문제를
          해결하기 위해 DOM 트리를 탭 메뉴의 의도와 일치하도록 기능을
          구현했습니다.
        </p>
        <p>- 하지만 그로 인해 css 스타일링이 부자연스럽게 설계되었습니다.</p>
        <p>
          description 부분에 absoulte 가 적용되었고, 이를 탭 Title 요소와
          일치시키는 스타일링을 하려고 description부분을 감싸는 스타일링을
          시도하려 했지만 description의 heigth는 내부 텍스트로 인해 동적이기
          때문에 absoulte가 적용된 요소를 고정 시키기에는 무리가 있었습니다.
        </p>
        <p>
          - 즉,
          <Link to="/tab-menu/3_r">
            <LinkTagStyle>LinkTagStyle탭 메뉴 세 번째 방법</LinkTagStyle>
          </Link>
          과 동일한 문제가 있었습니다.
        </p>
      </UiExplanation>
    </>
  )
}

export default TabMenu5
