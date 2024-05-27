import { Outlet } from 'react-router-dom'
import Gnb from '../Gnb'

const RootLayout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
    </>
  )
}
export default RootLayout
