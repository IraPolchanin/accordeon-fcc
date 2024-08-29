import React, { useEffect, useState } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => { }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

export default useFetch