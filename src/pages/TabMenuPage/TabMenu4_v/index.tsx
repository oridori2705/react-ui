import data from '../data'
import VanillaWrapper from '../../../components/VanillaWrapper'
import './TabMenu4_v.css'

const buildTabMenus = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement('li')
  $li.classList.add('tab')
  $li.textContent = title
  $li.setAttribute('data-id', id)
  return $li
}

const buildDescriptions = ({
  id,
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
  <VanillaWrapper
    title="#4"
    initiator={initiator}
  />
)

export default TabMenu4V
