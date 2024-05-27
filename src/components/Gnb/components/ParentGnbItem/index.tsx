import { Link } from 'react-router-dom'
import { ParentRoute, ROUTE_PATH, routes } from '../../../../routes/routes'
import { ParentGnbItemUlSubRoutes } from './ParentGnbItemUlSubRoutes.styled'
import { ParentGnbItemLi } from './ParentGnbItemLi.styled'
import GnbItem from '../GnbItem'

const ParentGnbItem = ({
  route: { name, link, children },
  currentPath
}: {
  route: ParentRoute
  currentPath: ROUTE_PATH
}) => {
  const open = children.includes(currentPath)

  return (
    <ParentGnbItemLi open={open}>
      <Link to={link}>{name}</Link>
      <ParentGnbItemUlSubRoutes
        open={open}
        length={children.length}>
        {children.map(r => {
          const route = routes[r]
          return (
            <GnbItem
              route={route}
              currentPath={currentPath}
              key={route.key}
            />
          )
        })}
      </ParentGnbItemUlSubRoutes>
    </ParentGnbItemLi>
  )
}

export default ParentGnbItem
