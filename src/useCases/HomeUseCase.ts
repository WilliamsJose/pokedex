import { useEffect } from 'react';
import { useData } from '../hooks/swr';
import { toast } from 'react-toastify';

export function HomeUseCase() {
  const { data, isLoading, error } = useData('pokemon/?limit=20&offset=40"');

  useEffect(() => {
    if (error) {
      toast(`Error trying to fetch pokemons`);
    }
  }, [error]);

  return {
    data,
    isLoading,
    error,
  };
}
