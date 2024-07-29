import React, { useEffect, useState } from 'react'

const RandomColorGen = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const getRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    setColor(hexColor);
  }

  const getRandomRGBColor = () => {
    let rgbColor = [];
    for (let i = 0; i < 3; i++) {
      rgbColor.push(Math.floor(Math.random() * 256))
    }
    setColor(`rgb(${rgbColor})`);
  }

  const hexToRgb = (hex) => {
    setTypeOfColor('rgb');
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const rgbToHex = (color) => {
    setTypeOfColor('hex');
    const hexColor = "#"+color.slice(4, -1).split(',').map(x=>+x).map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
    setColor(hexColor)
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => rgbToHex(color)}>Transform to HEX Color</button>
      <button onClick={() => hexToRgb(color)}>Transform to RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? getRandomHexColor : getRandomRGBColor}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColorGen