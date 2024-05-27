import { Link, useLocation } from 'react-router-dom'

import { ROUTE_PATH, gnbRootList } from '../../routes/routes'
import GnbItem from './components/GnbItem'
import { SidebarContainer } from './components/SideBarContainer'

const Gnb = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <SidebarContainer>
      <h1>
        <Link to="/">
          리액트 UI 만들기 <sub>개발새발</sub>
        </Link>
      </h1>
      <ul>
        {gnbRootList.map(r => (
          <GnbItem
            route={r}
            currentPath={pathname as ROUTE_PATH}
            key={r.key}
          />
        ))}
      </ul>
    </SidebarContainer>
  )
}

export default Gnb
