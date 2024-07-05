import styled from '@emotion/styled'
import { DescriptionProps } from '../TabMenu1/TabMenu1.styled'

export const TabMenu2Description = styled.div<DescriptionProps>`
  padding: 20px;
  background-color: #ffffff;
  display: ${props => (props.current ? 'block' : 'none')};
`
