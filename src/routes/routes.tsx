import { createBrowserRouter } from 'react-router-dom'

import Accordion2 from '../pages/AccordionPage/Accordion2'

import MainPage from '../pages/MainPage'
import RootLayout from '../components/RootLayout'
import TabMenuPage from '../pages/TabMenuPage'
import Accordion1 from '../pages/AccordionPage/Accordion1'
import Accordion3 from '../pages/AccordionPage/Accordion3'
import Accordion4V from '../pages/AccordionPage/Accordion4_v'
import Accordion5 from '../pages/AccordionPage/Accordion5'
import Accordion6 from '../pages/AccordionPage/Accordion6'
import Accordion7 from '../pages/AccordionPage/Accordion7'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/accordion/1_r',
        element: <Accordion1 />
      },
      {
        path: '/accordion/2_r',
        element: <Accordion2 />
      },
      {
        path: '/accordion/3_r',
        element: <Accordion3 />
      },
      {
        path: '/accordion/4_v',
        element: <Accordion4V />
      },
      {
        path: '/accordion/5_r',
        element: <Accordion5 />
      },
      {
        path: '/accordion/6_r',
        element: <Accordion6 />
      },
      {
        path: '/accordion/7_r',
        element: <Accordion7 />
      },
      {
        path: '/tab-menu',
        element: <TabMenuPage />
      }
    ]
  }
])

export const routePaths = [
  '/',
  '/accordion',
  '/accordion/1_r',
  '/accordion/2_r',
  '/accordion/3_r',
  '/accordion/4_v',
  '/accordion/5_r',
  '/accordion/6_r',
  '/accordion/7_r',
  '/tab-menu'
] as const
export type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key: ROUTE_PATH
  link: ROUTE_PATH
  name: string
}
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[]
}
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null
}

export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: ['/accordion', '/tab-menu']
  },
  '/accordion': {
    key: '/accordion',
    link: '/accordion/1_r',
    name: '01. 아코디언',
    children: [
      '/accordion/1_r',
      '/accordion/2_r',
      '/accordion/3_r',
      '/accordion/4_v',
      '/accordion/5_r',
      '/accordion/6_r',
      '/accordion/7_r'
    ]
  },
  '/accordion/1_r': {
    key: '/accordion/1_r',
    link: '/accordion/1_r',
    name: '리액트 아코디언 첫 번째 방법',
    children: Accordion1
  },
  '/accordion/2_r': {
    key: '/accordion/2_r',
    link: '/accordion/2_r',
    name: '리액트 아코디언 두 번째 방법',
    children: Accordion2
  },
  '/accordion/3_r': {
    key: '/accordion/3_r',
    link: '/accordion/3_r',
    name: '리액트 아코디언 세 번째 방법',
    children: Accordion3
  },
  '/accordion/4_v': {
    key: '/accordion/4_v',
    link: '/accordion/4_v',
    name: '리액트 아코디언 네 번째 방법 - Vanilla',
    children: Accordion4V
  },
  '/accordion/5_r': {
    key: '/accordion/5_r',
    link: '/accordion/5_r',
    name: '리액트 아코디언 다섯 번째 방법',
    children: Accordion5
  },
  '/accordion/6_r': {
    key: '/accordion/6_r',
    link: '/accordion/6_r',
    name: '리액트 아코디언 여섯 번째 방법',
    children: Accordion6
  },
  '/accordion/7_r': {
    key: '/accordion/7_r',
    link: '/accordion/7_r',
    name: '리액트 아코디언 일곱 번째 방법',
    children: Accordion7
  },
  '/tab-menu': {
    key: '/tab-menu',
    link: '/tab-menu',
    name: '탭 메뉴',
    children: TabMenuPage
  }
}

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(
  r => routes[r]
)
