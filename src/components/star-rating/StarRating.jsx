import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './starRating.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = getCurrentIndex => { setRating(getCurrentIndex) }
  const handleMouseEnter = getCurrentIndex => { setHover(getCurrentIndex) }
  const handleMouseLeave = () => { setRating(rating) }

  return (
    <div className="star-rating"
      onMouseLeave={() => rating < 1 && setHover(0)}
    >
      {
        [...Array(noOfStars)].map((_, index) => {
          index += 1;

          return <FaStar
            key={index}
            className={index <= (rating || hover) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        }
        )
      }
    </div>
  )
}

export default StarRating