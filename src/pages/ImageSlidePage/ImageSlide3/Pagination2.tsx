import { PageButton, PageList, PaginationContainer } from './Pagination.styled'

const Pagination2 = ({
  totalPages,
  currentIndex,
  visibleCount = 10,
  handleMove
}: {
  totalPages: number
  currentIndex: number
  visibleCount?: number
  handleMove: (index: number, current: number) => void
}) => {
  const pages = Array.from(
    { length: Math.min(visibleCount, totalPages) },
    (_, i) =>
      Math.max(
        1,
        Math.min(
          currentIndex - Math.floor(visibleCount / 2),
          totalPages - visibleCount + 1
        )
      ) + i
  )
  return (
    <PaginationContainer>
      <PageList>
        {pages.map(pageIndex => (
          <div key={pageIndex}>
            <PageButton
              isCurrent={pageIndex - 1 === currentIndex}
              onClick={() => handleMove(pageIndex - 1, currentIndex)}>
              {pageIndex}
            </PageButton>
          </div>
        ))}
      </PageList>
    </PaginationContainer>
  )
}

export default Pagination2
