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
import LineClamp1 from '../pages/lineClampPage/lineClamp1'
import LineClamp2 from '../pages/lineClampPage/lineClamp2'
import LazyImage1 from '../pages/LazyImagePage/LazyImage1'
import LazyImage2 from '../pages/LazyImagePage/LazyImage2'
import LazyImage3 from '../pages/LazyImagePage/LazyImage3'
import InfinityScroll1 from '@/pages/InfinityScrollPage/InfinityScroll1'
import HorizontalScrollBox1 from '@/pages/HorizontalScrollBoxPage/HorizontalScrollBox1'
import HorizontalScrollBox2 from '@/pages/HorizontalScrollBoxPage/HorizontalScrollBox2'
import ScrollSpy2 from '@/pages/ScrollSpyPage/ScrollSpy2'
import ScrollSpy1 from '@/pages/ScrollSpyPage/ScrollSpy1'
import ScrollSpy3 from '@/pages/ScrollSpyPage/ScrollSpy3'
import ScrollSpy4 from '@/pages/ScrollSpyPage/ScrollSpy4'
import ScrollSpy5 from '@/pages/ScrollSpyPage/ScrollSpy5'
import SnackBar1 from '@/pages/SnackBarPage/SnackBar1'
import SnackBar2 from '@/pages/SnackBarPage/SnackBar2'
import SnackBar3 from '@/pages/SnackBarPage/SnackBar3'
import SnackBar4 from '@/pages/SnackBarPage/SnackBar4'
import SnackBar5 from '@/pages/SnackBarPage/SnackBar5'
import Modal1 from '@/pages/ModalPage/Modal1'
import Modal2 from '@/pages/ModalPage/Modal2'
import Modal3 from '@/pages/ModalPage/Modal3'
import Modal4 from '@/pages/ModalPage/Modal4'
import Popover1 from '@/pages/PopoverPage/Popover1'
import Popover2 from '@/pages/PopoverPage/Popover2'
import Popover3 from '@/pages/PopoverPage/Popover3'
import Popover4 from '@/pages/PopoverPage/Popover4'

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
      },
      {
        path: '/line-clamp/1_r',
        element: <LineClamp1 />
      },
      {
        path: '/line-clamp/2_r',
        element: <LineClamp2 />
      },
      {
        path: '/lazy-image/1_r',
        element: <LazyImage1 />
      },
      {
        path: '/lazy-image/2_r',
        element: <LazyImage2 />
      },
      {
        path: '/lazy-image/3_r',
        element: <LazyImage3 />
      },
      {
        path: '/infinity-scroll/1_r',
        element: <InfinityScroll1 />
      },
      {
        path: '/horizontal-scroll-box/1_r',
        element: <HorizontalScrollBox1 />
      },
      {
        path: '/horizontal-scroll-box/2_r',
        element: <HorizontalScrollBox2 />
      },
      {
        path: '/scroll-spy/1_r',
        element: <ScrollSpy1 />
      },
      {
        path: '/scroll-spy/2_r',
        element: <ScrollSpy2 />
      },
      {
        path: '/scroll-spy/3_r',
        element: <ScrollSpy3 />
      },
      {
        path: '/scroll-spy/4_r',
        element: <ScrollSpy4 />
      },
      {
        path: '/scroll-spy/5_r',
        element: <ScrollSpy5 />
      },
      {
        path: '/snack-bar/1_r',
        element: <SnackBar1 />
      },
      {
        path: '/snack-bar/2_r',
        element: <SnackBar2 />
      },
      {
        path: '/snack-bar/3_r',
        element: <SnackBar3 />
      },
      {
        path: '/snack-bar/4_r',
        element: <SnackBar4 />
      },
      {
        path: '/snack-bar/5_r',
        element: <SnackBar5 />
      },
      {
        path: '/modal/1_r',
        element: <Modal1 />
      },
      {
        path: '/modal/2_r',
        element: <Modal2 />
      },
      {
        path: '/modal/3_r',
        element: <Modal3 />
      },
      {
        path: '/modal/4_r',
        element: <Modal4 />
      },
      {
        path: 'popover/1_r',
        element: <Popover1 />
      },
      {
        path: 'popover/2_r',
        element: <Popover2 />
      },
      {
        path: 'popover/3_r',
        element: <Popover3 />
      },
      {
        path: 'popover/4_r',
        element: <Popover4 />
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
  '/text-box/4_r',
  '/line-clamp',
  '/line-clamp/1_r',
  '/line-clamp/2_r',
  '/lazy-image',
  '/lazy-image/1_r',
  '/lazy-image/2_r',
  '/lazy-image/3_r',
  '/infinity-scroll',
  '/infinity-scroll/1_r',
  '/horizontal-scroll-box',
  '/horizontal-scroll-box/1_r',
  '/horizontal-scroll-box/2_r',
  '/scroll-spy',
  '/scroll-spy/1_r',
  '/scroll-spy/2_r',
  '/scroll-spy/3_r',
  '/scroll-spy/4_r',
  '/scroll-spy/5_r',
  '/snack-bar',
  '/snack-bar/1_r',
  '/snack-bar/2_r',
  '/snack-bar/3_r',
  '/snack-bar/4_r',
  '/snack-bar/5_r',
  '/modal',
  '/modal/1_r',
  '/modal/2_r',
  '/modal/3_r',
  '/modal/4_r',
  '/popover',
  '/popover/1_r',
  '/popover/2_r',
  '/popover/3_r',
  '/popover/4_r'
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
    children: [
      '/accordion',
      '/tab-menu',
      '/tooltip',
      '/text-box',
      '/line-clamp',
      '/lazy-image',
      '/infinity-scroll',
      '/horizontal-scroll-box',
      '/scroll-spy',
      '/snack-bar',
      '/modal',
      '/popover'
    ]
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
  },
  '/line-clamp': {
    key: '/line-clamp',
    link: '/line-clamp/1_r',
    name: '04. 라인 클램프',
    children: ['/line-clamp/1_r', '/line-clamp/2_r']
  },
  '/line-clamp/1_r': {
    key: '/line-clamp/1_r',
    link: '/line-clamp/1_r',
    name: '라인클램프 첫 번째 방법',
    children: LineClamp1
  },
  '/line-clamp/2_r': {
    key: '/line-clamp/2_r',
    link: '/line-clamp/2_r',
    name: '라인클램프 두 번째 방법',
    children: LineClamp2
  },
  '/lazy-image': {
    key: '/lazy-image',
    link: '/lazy-image/1_r',
    name: '05. 이미지 지연 로딩',
    children: ['/lazy-image/1_r', '/lazy-image/2_r', '/lazy-image/3_r']
  },
  '/lazy-image/1_r': {
    key: '/lazy-image/1_r',
    link: '/lazy-image/1_r',
    name: '이미지 지연 로딩 첫 번째 방법',
    children: LazyImage1
  },
  '/lazy-image/2_r': {
    key: '/lazy-image/2_r',
    link: '/lazy-image/2_r',
    name: '이미지 지연 로딩 두 번째 방법',
    children: LazyImage2
  },
  '/lazy-image/3_r': {
    key: '/lazy-image/3_r',
    link: '/lazy-image/3_r',
    name: '이미지 지연 로딩 세 번째 방법',
    children: LazyImage3
  },
  '/infinity-scroll': {
    key: '/infinity-scroll',
    link: '/infinity-scroll/1_r',
    name: '06. 무한 스크롤',
    children: ['/infinity-scroll/1_r']
  },
  '/infinity-scroll/1_r': {
    key: '/infinity-scroll/1_r',
    link: '/infinity-scroll/1_r',
    name: '무한 스크롤 첫 번째 방법',
    children: InfinityScroll1
  },
  '/horizontal-scroll-box': {
    key: '/horizontal-scroll-box',
    link: '/horizontal-scroll-box/1_r',
    name: '07. 횡 스크롤 박스',
    children: ['/horizontal-scroll-box/1_r', '/horizontal-scroll-box/2_r']
  },
  '/horizontal-scroll-box/1_r': {
    key: '/horizontal-scroll-box/1_r',
    link: '/horizontal-scroll-box/1_r',
    name: '횡 스크롤 박스 첫 번째 방법',
    children: HorizontalScrollBox1
  },
  '/horizontal-scroll-box/2_r': {
    key: '/horizontal-scroll-box/2_r',
    link: '/horizontal-scroll-box/2_r',
    name: '횡 스크롤 박스 두 번째 방법',
    children: HorizontalScrollBox2
  },
  '/scroll-spy': {
    key: '/scroll-spy',
    link: '/scroll-spy/1_r',
    name: '08. 스크롤 스파이',
    children: [
      '/scroll-spy/1_r',
      '/scroll-spy/2_r',
      '/scroll-spy/3_r',
      '/scroll-spy/4_r',
      '/scroll-spy/5_r'
    ]
  },
  '/scroll-spy/1_r': {
    key: '/scroll-spy/1_r',
    link: '/scroll-spy/1_r',
    name: '스크롤 스파이 첫 번째 방법',
    children: ScrollSpy1
  },
  '/scroll-spy/2_r': {
    key: '/scroll-spy/2_r',
    link: '/scroll-spy/2_r',
    name: '스크롤 스파이 두 번째 방법',
    children: ScrollSpy2
  },
  '/scroll-spy/3_r': {
    key: '/scroll-spy/3_r',
    link: '/scroll-spy/3_r',
    name: '스크롤 스파이 세 번째 방법',
    children: ScrollSpy3
  },
  '/scroll-spy/4_r': {
    key: '/scroll-spy/4_r',
    link: '/scroll-spy/4_r',
    name: '스크롤 스파이 네 번째 방법',
    children: ScrollSpy4
  },
  '/scroll-spy/5_r': {
    key: '/scroll-spy/5_r',
    link: '/scroll-spy/5_r',
    name: '스크롤 스파이 다섯 번째 방법',
    children: ScrollSpy5
  },
  '/snack-bar': {
    key: '/snack-bar',
    link: '/snack-bar/1_r',
    name: '08. 스낵바',
    children: [
      '/snack-bar/1_r',
      '/snack-bar/2_r',
      '/snack-bar/3_r',
      '/snack-bar/4_r',
      '/snack-bar/5_r'
    ]
  },
  '/snack-bar/1_r': {
    key: '/snack-bar/1_r',
    link: '/snack-bar/1_r',
    name: '스낵바 첫 번째 방법',
    children: SnackBar1
  },
  '/snack-bar/2_r': {
    key: '/snack-bar/2_r',
    link: '/snack-bar/2_r',
    name: '스낵바 두 번째 방법',
    children: SnackBar2
  },
  '/snack-bar/3_r': {
    key: '/snack-bar/3_r',
    link: '/snack-bar/3_r',
    name: '스낵바 세 번째 방법',
    children: SnackBar3
  },

  '/snack-bar/4_r': {
    key: '/snack-bar/4_r',
    link: '/snack-bar/4_r',
    name: '스낵바 네 번째 방법',
    children: SnackBar4
  },
  '/snack-bar/5_r': {
    key: '/snack-bar/5_r',
    link: '/snack-bar/5_r',
    name: '스낵바 다섯 번째 방법',
    children: SnackBar5
  },
  '/modal': {
    key: '/modal',
    link: '/modal/1_r',
    name: '09. 모달',
    children: ['/modal/1_r', '/modal/2_r', '/modal/3_r', '/modal/4_r']
  },
  '/modal/1_r': {
    key: '/modal/1_r',
    link: '/modal/1_r',
    name: '모달 첫 번째 방법',
    children: Modal1
  },
  '/modal/2_r': {
    key: '/modal/2_r',
    link: '/modal/2_r',
    name: '모달 두 번째 방법',
    children: Modal2
  },
  '/modal/3_r': {
    key: '/modal/3_r',
    link: '/modal/3_r',
    name: '모달 세 번째 방법',
    children: Modal3
  },
  '/modal/4_r': {
    key: '/modal/4_r',
    link: '/modal/4_r',
    name: '모달 네 번째 방법',
    children: Modal4
  },
  '/popover': {
    key: '/popover',
    link: '/popover/1_r',
    name: '09. 팝오버',
    children: ['/popover/1_r', '/popover/2_r', '/popover/3_r', '/popover/4_r']
  },
  '/popover/1_r': {
    key: '/popover/1_r',
    link: '/popover/1_r',
    name: '팝오버 첫 번째 방법',
    children: Popover1
  },
  '/popover/2_r': {
    key: '/popover/2_r',
    link: '/popover/2_r',
    name: '팝오버 두 번째 방법',
    children: Popover2
  },
  '/popover/3_r': {
    key: '/popover/3_r',
    link: '/popover/3_r',
    name: '팝오버 세 번째 방법',
    children: Popover3
  },
  '/popover/4_r': {
    key: '/popover/4_r',
    link: '/popover/4_r',
    name: '팝오버 네 번째 방법',
    children: Popover4
  }
}

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(
  r => routes[r]
)
