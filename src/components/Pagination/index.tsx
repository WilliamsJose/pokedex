import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import * as S from './styles';

interface PaginationProps {
  currentPage: string | undefined;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
  ...restProps
}: PaginationProps) => {
  function handlePreviousPage() {
    if (currentPage && +currentPage > 1) {
      onPageChange(+currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage && +currentPage < totalPages) {
      onPageChange(+currentPage + 1);
    }
  }

  function handleFirstPage() {
    onPageChange(1);
  }

  function handleLastPage() {
    onPageChange(totalPages);
  }

  return (
    <S.Pagination {...restProps}>
      <S.PaginationButton onClick={handlePreviousPage}>
        <HiChevronLeft />
      </S.PaginationButton>
      <S.PaginationButton onClick={handleFirstPage}>
        <S.PaginationItem>1</S.PaginationItem>
      </S.PaginationButton>
      <S.PaginationItem>
        <S.PaginationDots />
      </S.PaginationItem>
      <S.PaginationItem>{currentPage}</S.PaginationItem>
      <S.PaginationItem>
        <S.PaginationDots />
      </S.PaginationItem>
      <S.PaginationButton onClick={handleLastPage}>
        <S.PaginationItem>{totalPages || 'Loading'}</S.PaginationItem>
      </S.PaginationButton>
      <S.PaginationButton onClick={handleNextPage}>
        <HiChevronRight />
      </S.PaginationButton>
    </S.Pagination>
  );
};

export default Pagination;
