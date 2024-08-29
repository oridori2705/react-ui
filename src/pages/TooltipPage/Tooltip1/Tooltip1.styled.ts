import styled from '@emotion/styled'
import { TooltipContentType } from './types'

const CONTENT_INTERVAL = 'calc(100% + 12px)'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const TooltipContent = styled.div<TooltipContentType>`
  display: flex;
  align-items: center;
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0.4s,
    opacity 0.3s ease;

  ${props =>
    props.isOpen &&
    `
    visibility: visible;
    opacity: 0.99;
  `}
  ${props => {
    switch (props.direction) {
      case 'top':
        return `
         bottom: ${CONTENT_INTERVAL};
          left: 50%;
          transform: translateX(-50%);
          ${
            props.arrow &&
            `&::after {
            border-top: 10px solid #333;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 0px solid transparent;
            content: "";
            right: 50%;
            top: 100%;
            position: absolute;
        }`
          }
        `
      case 'bottom':
        return `
         top: ${CONTENT_INTERVAL};
          left: 50%;
          transform: translateX(-50%);
          ${
            props.arrow &&
            `&::after {
            border-top: 0px solid transparent;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #333;
            content: "";
            right: 50%;
            bottom: 100%;
            position: absolute;
        }`
          }
        `
      case 'left':
        return `
         top: 50%;
          right: ${CONTENT_INTERVAL};
          transform: translateY(-50%);
           ${
             props.arrow &&
             `&::after {
            border-top: 10px solid transparent;
            border-left: 10px solid #333;
            border-right: 0px solid transparent;
            border-bottom: 10px solid transparent;
            content: "";
            left: 100%;
            position: absolute;
        } `
           }
        
        `
      case 'right':
        return `
         top: 50%;
          left: ${CONTENT_INTERVAL};
          transform: translateY(-50%);
           ${
             props.arrow &&
             `&::after {
            border-top: 10px solid transparent;
            border-right: 10px solid #333;
            border-bottom: 10px solid transparent;
            border-left: 0px solid transparent;
            content: "";
   
            right: 100%;
            position: absolute;
        }`
           }    
        `
      default:
        return ''
    }
  }}
`
