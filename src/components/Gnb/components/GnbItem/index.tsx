import { ROUTE, ROUTE_PATH, isParentRoute } from '../../../../routes/routes'
import ChildGnbItem from '../ChildGnbItem'
import ParentGnbItem from '../ParentGnbItem'

const GnbItem = ({
  route,
  currentPath
}: {
  route: ROUTE
  currentPath: ROUTE_PATH
}) => {
  if (isParentRoute(route))
    return (
      <ParentGnbItem
        route={route}
        currentPath={currentPath}
      />
    )
  return (
    <ChildGnbItem
      route={route}
      currentPath={currentPath}
    />
  )
}

export default GnbItem
