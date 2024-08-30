import React, { useRef } from 'react';
import useFetch from '../useFetch/useFetch';

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }
  // const handleScrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }

  const handleScrollToTop = () => {
    const { current } = topRef
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToBottom = () => {
    const { current } = bottomRef
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (error) {
    return <h1>Error occured ! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3 ref={topRef}>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map(dataItem => <li key={dataItem.id}>{dataItem.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  )
}

export default ScrollToTopAndBottom