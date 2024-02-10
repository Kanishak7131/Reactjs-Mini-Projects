import "./style.css"
import { useState } from "react"
import { FaStar } from "react-icons/fa";
export default function StarRatings() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }
    return (
        <div className="starflex">
            {[...Array(5)].map((item, idx) => {
                idx = idx + 1;
                return (<FaStar className={idx <= (hover || rating) ? "active" : "inactive"} key={idx}
                    onClick={() => handleClick(idx)}
                    onMouseMove={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave()}
                />)
            })
            }
        </div >
    )
}