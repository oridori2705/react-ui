import { createBrowserRouter } from 'react-router-dom'

import Accordion2 from '../pages/AccordionPage/Accordion2'

import MainPage from '../pages/MainPage'
import RootLayout from '../components/RootLayout'
import Accordion1 from '../pages/AccordionPage/Accordion1'
import Accordion3 from '../pages/AccordionPage/Accordion3'
import Accordion4V from '../pages/AccordionPage/Accordion4_v'
import Accordion5 from '../pages/AccordionPage/Accordion5'
import Accordion6 from '../pages/AccordionPage/Accordion6'
import Accordion7 from '../pages/AccordionPage/Accordion7'
import TabMenu1 from '../pages/TabMenuPage/TabMenu1'
import TabMenu2 from '../pages/TabMenuPage/TabMenu2'
import TabMenu3 from '../pages/TabMenuPage/TabMenu3'
import TabMenu4V from '../pages/TabMenuPage/TabMenu4_v'
import TabMenu5 from '../pages/TabMenuPage/TabMenu5'
import TabMenu6 from '../pages/TabMenuPage/TabMenu6'
import Tooltip1 from '../pages/TooltipPage/Tooltip1'
import Tooltip2 from '../pages/TooltipPage/Tooltip2'
import TextBox1 from '../pages/TextBoxPage/TextBox1'
import TextBox2 from '../pages/TextBoxPage/TextBox2'
import TextBox3 from '../pages/TextBoxPage/TextBox3'
import TextBox4 from '../pages/TextBoxPage/TextBox4'

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
        path: '/tab-menu/1_r',
        element: <TabMenu1 />
      },
      {
        path: '/tab-menu/2_r',
        element: <TabMenu2 />
      },
      {
        path: '/tab-menu/3_r',
        element: <TabMenu3 />
      },
      {
        path: '/tab-menu/4_v',
        element: <TabMenu4V />
      },
      {
        path: '/tab-menu/5_r',
        element: <TabMenu5 />
      },
      {
        path: '/tab-menu/6_r',
        element: <TabMenu6 />
      },
      {
        path: '/tooltip/1_r',
        element: <Tooltip1 />
      },
      {
        path: '/tooltip/2_r',
        element: <Tooltip2 />
      },
      {
        path: '/text-box/1_r',
        element: <TextBox1 />
      },
      {
        path: '/text-box/2_r',
        element: <TextBox2 />
      },
      {
        path: '/text-box/3_r',
        element: <TextBox3 />
      },
      {
        path: '/text-box/4_r',
        element: <TextBox4 />
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
  '/tab-menu',
  '/tab-menu/1_r',
  '/tab-menu/2_r',
  '/tab-menu/3_r',
  '/tab-menu/4_v',
  '/tab-menu/5_r',
  '/tab-menu/6_r',
  '/tooltip',
  '/tooltip/1_r',
  '/tooltip/2_r',
  '/text-box',
  '/text-box/1_r',
  '/text-box/2_r',
  '/text-box/3_r',
  '/text-box/4_r'
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
    children: ['/accordion', '/tab-menu', '/tooltip', '/text-box']
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
    link: '/tab-menu/1_r',
    name: '02. 탭 메뉴',
    children: [
      '/tab-menu/1_r',
      '/tab-menu/2_r',
      '/tab-menu/3_r',
      '/tab-menu/4_v',
      '/tab-menu/5_r',
      '/tab-menu/6_r'
    ]
  },
  '/tab-menu/1_r': {
    key: '/tab-menu/1_r',
    link: '/tab-menu/1_r',
    name: '탭 메뉴 첫 번째 방법',
    children: TabMenu1
  },
  '/tab-menu/2_r': {
    key: '/tab-menu/2_r',
    link: '/tab-menu/2_r',
    name: '탭 메뉴 두 번째 방법',
    children: TabMenu2
  },
  '/tab-menu/3_r': {
    key: '/tab-menu/3_r',
    link: '/tab-menu/3_r',
    name: '탭 메뉴 세 번째 방법',
    children: TabMenu3
  },
  '/tab-menu/4_v': {
    key: '/tab-menu/4_v',
    link: '/tab-menu/4_v',
    name: '탭 메뉴 네 번째 방법_VanillaJS',
    children: TabMenu4V
  },
  '/tab-menu/5_r': {
    key: '/tab-menu/5_r',
    link: '/tab-menu/5_r',
    name: '탭 메뉴 다섯 번째 방법',
    children: TabMenu5
  },
  '/tab-menu/6_r': {
    key: '/tab-menu/6_r',
    link: '/tab-menu/6_r',
    name: '탭 메뉴 여섯 번째 방법',
    children: TabMenu6
  },
  '/tooltip': {
    key: '/tooltip',
    link: '/tooltip/1_r',
    name: '03. 툴팁',
    children: ['/tooltip/1_r', '/tooltip/2_r']
  },
  '/tooltip/1_r': {
    key: '/tooltip/1_r',
    link: '/tooltip/1_r',
    name: '툴팁 첫 번째 방법',
    children: Tooltip1
  },
  '/tooltip/2_r': {
    key: '/tooltip/2_r',
    link: '/tooltip/2_r',
    name: '툴팁 두 번째 방법',
    children: Tooltip1
  },
  '/text-box': {
    key: '/text-box',
    link: '/text-box/1_r',
    name: '03. 텍스트박스',
    children: [
      '/text-box/1_r',
      '/text-box/2_r',
      '/text-box/3_r',
      '/text-box/4_r'
    ]
  },
  '/text-box/1_r': {
    key: '/text-box/1_r',
    link: '/text-box/1_r',
    name: '텍스트박스 첫 번째 방법',
    children: TextBox1
  },
  '/text-box/2_r': {
    key: '/text-box/2_r',
    link: '/text-box/2_r',
    name: '텍스트박스 두 번째 방법',
    children: TextBox2
  },
  '/text-box/3_r': {
    key: '/text-box/3_r',
    link: '/text-box/3_r',
    name: '텍스트박스 세 번째 방법',
    children: TextBox3
  },
  '/text-box/4_r': {
    key: '/text-box/4_r',
    link: '/text-box/4_r',
    name: '텍스트박스 네 번째 방법',
    children: TextBox4
  }
}

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(
  r => routes[r]
)
