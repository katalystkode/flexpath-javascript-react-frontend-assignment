import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setTimeout(() => {
        setData(json);
        setError(null);
        })
      }, 3000)
      .catch((error) => {
        setError(error.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}
