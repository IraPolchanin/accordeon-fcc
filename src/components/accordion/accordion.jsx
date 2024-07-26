import React, { useState } from 'react';
import data from './data';
import './accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  const handleMultipleSelection = (getCurrentId) => {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple)
  }

  return (
    <div className="acc-wrapper">
      <button
      className='accordion-btn'
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Multi" : "Single"} Selection
      </button>

      <div className="accordion">
        {data && data.length > 0
          ? data.map(dataItem => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => enableMultiSelection
                  ? handleMultipleSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || (enableMultiSelection && multiple.indexOf(dataItem.id) !== -1)
                ? <div className="content">{dataItem.answer}</div>
                : null}
            </div>
          ))
          : <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordion