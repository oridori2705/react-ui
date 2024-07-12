import styled from '@emotion/styled'
import { TabProps } from '../TabMenu1/TabMenu1.styled'
import { css } from '@emotion/react'

export const TabMenu6Description = styled.div<TabProps>`
  background-color: white;
  .description {
    ${props =>
      props.current
        ? css`
            padding: 15px;
            border-bottom: 1px solid #ccc;
            max-height: 100vh;
          `
        : css`
            padding: 0 15px;
            border-bottom: 0;
            max-height: 0;
          `}
  }
`
