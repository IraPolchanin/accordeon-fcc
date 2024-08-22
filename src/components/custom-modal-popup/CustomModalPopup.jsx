import React, { useState } from 'react'
import ModalPopup from './ModalPopup';
import "./modal.css"

const CustomModalPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModalPopup = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleToggleModalPopup}>
        Open Modal Popup
      </button>
      {showModal && (
        <ModalPopup
          id={"custom-id"}
          header={<h2>Customized Header</h2>}
          footer={<h2>Customized Footer</h2>}
          body={<div>Customized body</div>}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default CustomModalPopup