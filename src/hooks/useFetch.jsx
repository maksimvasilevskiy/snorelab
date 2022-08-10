import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useFetch;
