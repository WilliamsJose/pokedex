import { useData } from '../hooks/swr';

export function AppUseCase() {
  const { data, isLoading, error } = useData('pokemon/1');
  console.log(data);

  return {
    data,
    isLoading,
    error,
  };
}
