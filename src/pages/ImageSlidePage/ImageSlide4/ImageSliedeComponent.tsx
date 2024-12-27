import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactNode,
  useRef
} from 'react'
import useDragScroll from './useDragScroll'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface CarouselProps extends ComponentProps<'div'> {
  children: ReactNode
  itemsToShow?: number
  childSize?: number
  useButton?: boolean
  groupGap?: number
}

const ImageSlideComponent = ({
  children,
  itemsToShow = 4,
  childSize = 100,
  useButton = false,
  groupGap = 5,
  ...props
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemToShowWidth = itemsToShow * (childSize + groupGap) + childSize / 2
  const totalCarousels = Children.count(children)

  const childrenData = Children.toArray(children).map((child: ReactNode) => {
    if (isValidElement(child)) {
      return cloneElement(child as JSX.Element, {
        style: { width: `${childSize}px`, scrollSnapAlign: 'start' },
        className: `${child.props.className || ''}`
      })
    }
  })

  const {
    isLeftButtonActive,
    isRightButtonActive,
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchDown
  } = useDragScroll({
    containerRef,
    childSize: childSize + groupGap
  })

  return (
    <Wrapper {...props}>
      <Container
        ref={containerRef}
        style={{ width: `${itemToShowWidth}px` }}
        role="slider"
        aria-valuenow={itemsToShow}
        aria-valuemin={1}
        aria-valuemax={totalCarousels}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <ItemContainer groupGap={groupGap}>{childrenData}</ItemContainer>
      </Container>

      {useButton && (
        <>
          <NavButton
            direction="left"
            style={{ order: 1 }}
            disabled={!isLeftButtonActive}
            onClick={buttonScrollLeft}
          />
          <NavButton
            direction="right"
            style={{ order: 3 }}
            disabled={!isRightButtonActive}
            onClick={buttonScrollRight}
          />
        </>
      )}
    </Wrapper>
  )
}

export default ImageSlideComponent

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  scroll-behavior: smooth;
  overflow: hidden;
  order: 2;
  scroll-snap-type: x mandatory;
  & > * {
    flex: 0 0 auto;
  }
`

export const ItemContainer = styled.div<{ groupGap: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: ${({ groupGap }) => `${groupGap}px`};
`

const NavButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 50%;
  border: 0;
  outline: 0;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 6px;
    height: 17px;
    top: 5px;
    background-color: #fff;
    transform-origin: 3px 14px;
  }

  &:disabled {
    background-color: red;
  }

  ${({ direction }) =>
    direction === 'left' &&
    css`
      left: 10px;

      &::before {
        left: 11px;
        transform: rotate(45deg);
      }

      &::after {
        left: 11px;
        transform: rotate(135deg);
      }
    `}

  ${({ direction }) =>
    direction === 'right' &&
    css`
      right: 10px;

      &::before {
        right: 11px;
        transform: rotate(-45deg);
      }

      &::after {
        right: 11px;
        transform: rotate(-135deg);
      }
    `}
`
