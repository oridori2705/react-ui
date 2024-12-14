import { useMemo } from 'react'
import { PageButton, PageList, PaginationContainer } from './Pagination.styled'

const Pagination = ({
  totalPages,
  currentIndex,
  visibleCount,
  handleMove
}: {
  totalPages: number
  currentIndex: number
  visibleCount?: number
  handleMove: (index: number) => void
}) => {
  const indexes = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i),
    [totalPages]
  )
  const viewCount = Math.min(visibleCount || totalPages, totalPages) // 보여지는 count의 수, 최대 count를 넘지않도록 한다.
  const halfCount = Math.floor(viewCount / 2) // 현재위치가 가운데에 놓여진다 했을 때
  const visibleMin = Math.min(
    Math.max(0, currentIndex - halfCount),
    totalPages - viewCount
  ) // 보여지는 page nubmber에서 최소값을 구한다.
  const visiblePages = indexes.slice(visibleMin, visibleMin + viewCount) // 만들어진 indexes배열을 이용

  return (
    <PaginationContainer>
      <PageList>
        {visiblePages.map(pageIndex => (
          <div key={pageIndex}>
            <PageButton
              isCurrent={pageIndex === currentIndex}
              onClick={() => handleMove(pageIndex)}>
              {pageIndex + 1}
            </PageButton>
          </div>
        ))}
      </PageList>
    </PaginationContainer>
  )
}

export default Pagination
