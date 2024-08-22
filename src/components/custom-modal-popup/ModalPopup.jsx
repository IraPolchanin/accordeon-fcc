import React from 'react';


const ModalPopup = ({ id, header, footer, body, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span 
          className="close-modal-icon"
          onClick={onClose}
          >
          &times;
          </span>
          <div>{header ? header : <h2>"Header"</h2>}</div>
        </div>

        <div className="body">
          {body ? body : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>

        <div className="footer">
          <div>{footer ? footer : <h2>"Footer"</h2>}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalPopup