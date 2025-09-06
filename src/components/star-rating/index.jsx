import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({ noOfStar = 5 }) {

    const [rating, setRating] = useState(0); // Stores the current rating
    const [hover, setHover] = useState(0);   // Stores the current hover index

    // When user clicks a star
    function handleClick(index) {
        setRating(index);
    }

    // When user hovers over a star
    function handleMouseEnter(index) {
        setHover(index);
    }

    // When user stops hovering
    function handleMouseLeave() {
        setHover(rating); // Reset hover to current rating
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStar)].map((_, idx) => {
                    const index = idx + 1; // Convert zero-based index to 1-based

                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}
