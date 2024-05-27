import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Global } from '@emotion/react'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <div>
      <Global styles={GlobalStyle()} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
