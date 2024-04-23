import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.tvmaze.com';

function useFetch<T = unknown>(url: string): { data: T | null; loading: boolean; error: string | null; } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);


    fetch(BASE_URL + url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      })

  }, [url]);

  return { data, loading, error };
}

export default useFetch;