import data from '../data'
import VanillaWrapper from '../../../components/VanillaWrapper'
import './TabMenu4_v.css'
import UiExplanation from '../../../components/UiExplanation'
import { Link } from 'react-router-dom'
import { LinkTagStyle } from '../TabMenu5/TabMenu5.styled'

const buildTabMenus = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement('li')
  $li.classList.add('tab')
  $li.textContent = title
  $li.setAttribute('data-id', id)
  return $li
}

const buildDescriptions = ({
  description
}: {
  id: string
  description: string
}) => {
  const $div = document.createElement('div')
  $div.classList.add('description')
  $div.textContent = description
  return $div
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string = data[0].id

  const $container = document.createElement('div')
  $container.classList.add('container', 'tabMenu2')

  const $tabUl = document.createElement('ul')
  $tabUl.classList.add('tabList')

  const $tabList = data.map(buildTabMenus)
  const $desc = data.map(buildDescriptions)

  $tabUl.append(...$tabList)
  $container.append($tabUl, ...$desc)

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement
    if (!$el.classList.contains('tab')) return

    currentId = $el.dataset.id || data[0].id
    $tabList.forEach(($item, i) => {
      $item.classList.toggle('current', currentId === $item.dataset.id)
      $desc[i].classList.toggle('current', currentId === $item.dataset.id)
    })
  }
  $tabUl.addEventListener('click', handleClickTab)
  $tabList[3].click()

  wrapper.append($container)
}

const TabMenu4V = () => (
  <>
    <VanillaWrapper
      title="#4"
      initiator={initiator}
    />
    <UiExplanation>
      <p>- VanillaJS만을 사용해서 탭 메뉴를 구현해봤습니다.</p>
      <p>
        - currentId를 let으로 관리해서 클릭 이벤트를 통해 각 탭 아이템을
        toggle해서 선택되는 스타일을 가진 class를 추가하도록 했습니다.
      </p>
      <p>
        - 구조는 container 엘리먼트와, tabList 엘리먼트로 구성하고, tabUl 요소에
        tab Title 데이터를 나열하고, container요소에 tabUl과 description
        요소들을 나열하게 했습니다.
      </p>
      <p>
        - 즉,
        <Link to="/tab-menu/2_r">
          <LinkTagStyle>구조는 탭 메뉴 두 번째 방법</LinkTagStyle>과 같습니다.
        </Link>
      </p>
    </UiExplanation>
  </>
)

export default TabMenu4V
