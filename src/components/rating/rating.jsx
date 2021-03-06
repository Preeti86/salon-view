import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './rating.css';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
  return (
    <div>
      {[ ...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
         <label>
              <input
               type="radio" 
               name="rating" 
               value={ratingValue} 
               onClick={() => (setRating(ratingValue))}
               
                 />
            <FaStar 
            className="star" 
            color={ratingValue <= (hover || rating) ? "#DAA520" : "#DCDCDC"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            />
          </label>
      );
      })}
      <p> {rating} </p>
    </div>
  );
};

export default StarRating;