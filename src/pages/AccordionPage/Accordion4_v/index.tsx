import UiExplanation from '../../../components/UiExplanation'
import { StyledCode, StyledStrong } from '../../../components/UiExplanation/UiExplanation.styled'
import VanillaWrapper from '../../../components/VanillaWrapper'
import data from '../data'
import './styles/index.css'

const itemBuilder = ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
}) => {
  const $li = document.createElement('li')
  $li.classList.add('item', 'item3')
  $li.setAttribute('data-id', id)

  const $tab = document.createElement('div')
  $tab.classList.add('tab')
  $tab.textContent = title

  const $description = document.createElement('div')
  $description.classList.add('description')
  $description.textContent = description

  $li.append($tab, $description)
  return $li
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null

  const $ul = document.createElement('ul')
  $ul.classList.add('container')

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement
    if (!$el.classList.contains('tab')) return

    const targetId = $el.parentElement!.dataset.id
    if (!targetId) return

    currentId = targetId === currentId ? null : targetId

    $items.forEach($item => {
      $item.classList.toggle('current', currentId === $item.dataset.id)
    })
  }
  $ul.addEventListener('click', handleClickTab)

  const $items = data.map(itemBuilder)
  $ul.append(...$items)
  ;($items[0].children[0] as HTMLElement).click()

  wrapper.append($ul)
}

const Accordion4V = () => (
  <>
  
  <VanillaWrapper
    title="#4"
    initiator={initiator}
  />
    <UiExplanation>
          <p><StyledStrong>VanillaJS로만</StyledStrong> 아코디언 기능을 구현했습니다.</p>
          <p>1. <StyledCode>currentId</StyledCode> 값을 <StyledCode>let</StyledCode>으로 두고, click 이벤트를 <StyledStrong>이벤트 위임</StyledStrong>으로 적용한 다음 현재 클릭한 요소를 검사합니다. - Tab 제목을누른 것인지 아닌지</p>
          <p>2. 아코디언 요소마다 <StyledCode>data-id </StyledCode>속성을 두고, 클릭한 요소의 Id가 무엇인지 알 수 있도록 합니다. - <StyledCode>targetId</StyledCode> 값을 구함</p>
          <p>3. <StyledCode>currentId</StyledCode>는 현재 클릭한 <StyledCode>targetId</StyledCode> 비교한 후 같다면 아코디언을 접어야하고, 아니라면 <StyledCode>currentId</StyledCode>를 targetId로 바꿔줘야 합니다. - 현재 클릭한 <StyledCode>currentId</StyledCode>를 최종적으로 구함</p>
          <p>4. 아코디언의 모든 요소를 <StyledCode>forEach()</StyledCode>로 돌면서 현재 <StyledCode>currentId</StyledCode>를 이용해 <StyledCode>toggle()</StyledCode>메서드를 수행합니다. - 열리고 닫히는 기능</p>  
      </UiExplanation>
  </>
)
export default Accordion4V
