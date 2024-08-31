import React, { useRef, useState } from 'react'

const ScrollToSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const refs = useRef([]);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  const handleScrollToSection = () => {
    if (currentIndex < refs.current.length) {
      const nextSection = refs.current[currentIndex];
      const pos = nextSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: pos - 100, // Adjust this offset to account for the fixed header height
        behavior: 'smooth',
      });

      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === refs.current.length ? 0 : prevIndex + 1
      );
    }
  }
  console.log(refs)

  return (
    <div>
      <div
        className="header-section"
        style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', zIndex: 1 }}
      >
        <h1>Scroll to a particular section</h1>
        <button onClick={handleScrollToSection}>Click To Scroll</button>
      </div>
      <div style={{ paddingTop: '100px' }}>
        {data.map((dataItem, index) => (
          <div key={index} style={dataItem.style} ref={el => {
            // console.log(el); // Додаємо лог для перевірки
            refs.current[index] = el;
          }}>
            <h3>{dataItem.label}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ScrollToSection