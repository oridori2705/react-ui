import { Link } from 'react-router-dom'
import { ChildRoute, ROUTE_PATH } from '../../../../routes/routes'
import { ChildGnbItemLi } from './ChildGnbItem.styeld'

const ChildGnbItem = ({
  route: { name, link, children },
  currentPath
}: {
  route: ChildRoute
  currentPath: ROUTE_PATH
}) => {
  return (
    <ChildGnbItemLi active={link === currentPath}>
      {children ? <Link to={link}>{name}</Link> : name}
    </ChildGnbItemLi>
  )
}

export default ChildGnbItem
