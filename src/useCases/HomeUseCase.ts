import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../hooks/swr';
import { getOffset } from '../utils/utils';

export function HomeUseCase() {
  const { page } = useParams();
  const navigate = useNavigate();
  const pageLimit = 20;
  const offset = page && getOffset(+page, pageLimit);
  const currentPage = `pokemon/?offset=${offset}&limit=${pageLimit}`;
  const { data, isLoading, error } = useData(currentPage);
  const totalPokemons = data?.count;
  const totalPages = Math.ceil(totalPokemons / pageLimit);

  function onPageChange(nextPage: number) {
    navigate(`/page/${nextPage}`, {
      preventScrollReset: true,
    });
  }

  return {
    data,
    isLoading,
    error,
    totalPages,
    onPageChange,
    page,
  };
}
