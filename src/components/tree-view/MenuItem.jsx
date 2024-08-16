import React, { useState } from 'react'
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa'

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);
  // const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren(!displayCurrentChildren)
  }

  // function handleToggleChildren(getCurrentlabel) {
  //   setDisplayCurrentChildren({
  //     ...displayCurrentChildren,
  //     [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
  //   });
  // }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length
          ? <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren ? <FaMinus className='menu-item-icon'/> : <FaPlus className='menu-item-icon' />}
            {/* {displayCurrentChildren[item.label] ? <FaMinus className='menu-item-icon' /> : <FaPlus className='menu-item-icon'} */}
          </span>
          : null}
      </div>
      {item && item.children && item.children.length && displayCurrentChildren
        ? <MenuList list={item.children} />
        : null}
      {/* {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null} */}
    </li>
  )
}

export default MenuItem