import React from 'react'
import useWindowResize from './useWindowResize'

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  )
}

export default UseWindowResizeTest