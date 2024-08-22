import React, { useEffect, useState } from 'react';
import './scroll.css';

const ScrollIndicator = () => {
  const url = "https://dummyjson.com/products?limit=100";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);


  const fetchData = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const dataFromServer = await resp.json();
      if (dataFromServer && dataFromServer.products && dataFromServer.products.length > 0) {
        setData(dataFromServer.products);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => setScrollPercentage(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

  useEffect(() => {
    fetchData(url)
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);
    return () => window.removeEventListener('scroll', () => { })
  }, []);

  // console.log(scrollPercentage)

  if (errorMessage) {
    return <p>Error! {errorMessage}</p>
  }

  if (loading) {
    return <p>Loading data! Please wait!</p>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          >
          </div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  )
}

export default ScrollIndicator