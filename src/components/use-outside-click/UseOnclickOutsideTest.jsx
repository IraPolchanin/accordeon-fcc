import React, { useRef, useState } from 'react'
import useOutsideClick from './useOutsideClick';

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false))

  const contentStyle = {
  textAlign: 'center',
     border: "2px solid blue",
  }

  return (
    <div>
      {showContent
        ? (<div style={contentStyle} ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>)
        : (
          <button onClick={() => setShowContent(true)}>Show Content</button>
        )}

    </div>
  )
}

export default UseOnclickOutsideTest