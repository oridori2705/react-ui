import styled from '@emotion/styled'
import data from '../data'
import ScrollSpy, { RenderNavProps } from './ScrollSpyComponent'
import { Title, TitleSub } from '../ScrollSpy1/ScrollSpy.styled'

const ScrollSpy5 = () => {
  return (
    <div>
      <Title>
        #5. ScrollSpy
        <TitleSub>
          IntersectionObserver 방식 + Render Props 패턴 활용, 불필요한
          DefaultNavRender 제거
        </TitleSub>
      </Title>
      <ScrollSpy renderNav={customNavRender}>
        <ScrollSpy.UList>
          {data.map(item => (
            <ScrollSpy.ListItem
              key={item.id}
              ItemId={item.id}
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

export default ScrollSpy5

const customNavRender = ({
  currentIndex,
  navsRef,
  onNavClick
}: RenderNavProps) => (
  <CustomNavContainer>
    {data.map((item, index) => (
      <CustomNavItem
        key={item.id}
        $isActive={currentIndex === index}
        ref={r => {
          navsRef.current[index] = r
        }}
        onClick={() => onNavClick(index)}>
        <button>{item.title}</button>
      </CustomNavItem>
    ))}
  </CustomNavContainer>
)

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
    <ContentSection>
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
    </ContentSection>
  )
}

// ScrollSpy의 스타일을 커스텀할 수 있음
const CustomNavContainer = styled.div`
  height: 30%;
  position: fixed;
  flex-direction: column;
  overflow-y: scroll;
  background: #fff;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

const CustomNavItem = styled.li<{ $isActive: boolean }>`
  padding: 0;
  margin: 0;
  list-style: none;

  button {
    max-width: 200px;
    padding: 12px 20px;
    border: none;
    background: none;
    text-align: left;
    font-size: 0.95rem;
    color: ${props => (props.$isActive ? '#2563eb' : '#666')};
    font-weight: ${props => (props.$isActive ? '600' : '400')};
    cursor: pointer;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;

    &:hover {
      background-color: ${props => (props.$isActive ? '#e8f0fe' : '#f8f9fa')};
      color: ${props => (props.$isActive ? '#2563eb' : '#333')};
    }
  }

  ${props =>
    props.$isActive &&
    `
    background-color: #e8f0fe;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: #2563eb;
    }
  `}
`

const ContentSection = styled.div`
  padding: 20px;
  max-width: calc(100% - 250px);
  margin-left: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
