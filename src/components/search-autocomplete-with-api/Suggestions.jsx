import React from 'react'

const Suggestions = ({ filteredUsers, handleClick }) => {
  return (
    <ul className='suggestions_list'>
      {filteredUsers && filteredUsers.length
        ? filteredUsers.map((user, index) => (
          <li className='suggestions_item'
            key={index}
            onClick={handleClick}
          >
            {user}
          </li>
        )
        ) : null}
    </ul>
  )
}

export default Suggestions