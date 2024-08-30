import React, { useEffect, useState } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true)
    try {
      const resp = await fetch(url, { options });
      if (!resp.ok) throw new Error(resp.statusText);
      const result = await resp.json();
      setData(result);
      setError(null)
    } catch (error) {
      setError(`${error} Some error occur!`)
    } finally {
      setPending(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

export default useFetch