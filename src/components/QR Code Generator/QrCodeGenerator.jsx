import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './qr-code-styles.css';

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleGenerateQrCode = () => {
    setQrCode(inputValue);
    setInputValue('')
  }

  return (
    <div className='qr-code-container'>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder='Enter your value here'
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          onClick={handleGenerateQrCode}
          disabled={!inputValue.trim()}
        >
          Generate
        </button>
      </div>
      {qrCode && <div>
        <QRCode id='qr-code-value' value={qrCode} size={200} />
      </div>}
    </div>
  )
}

export default QrCodeGenerator