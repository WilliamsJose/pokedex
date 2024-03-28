import useSWR from 'swr';

function saveDataToCache(data: unknown, cache_key: string) {
  localStorage.setItem(cache_key, JSON.stringify(data));
}

function getDataFromCache(cache_key: string) {
  const data = localStorage.getItem(cache_key);
  return data ? JSON.parse(data) : null;
}

const fetcher = async (path: string) => {
  console.log('Loading data...', path);
  const data = await fetch(`${import.meta.env.VITE_API_BASE_URL}${path}`);

  return await data.json();
};

export function useData(path: string) {
  const { data, error } = useSWR(path, fetcher, {
    fallbackData: getDataFromCache(path),
    onSuccess: data => {
      saveDataToCache(data, path);
    },
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
    revalidateIfStale: true,
    errorRetryCount: 0,
  });

  return {
    data,
    isLoading: !error && !data,
    error,
  };
}
