import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/fullStar.svg";
import "./Stars.css";

function Stars({ rating }) {
    const ratingInt = parseInt(rating.toString());
    const starsArray = Array.from({ length: 5 }, (_, index) => index < ratingInt);

    return (
        <div className="rating">
            {starsArray.map((isFull, index) => (
                <img
                    key={index}
                    src={isFull ? fullStar : emptyStar}
                    alt={`star-${index + 1}`}
                    className="star"
                />
            ))}
        </div>
    );
}


export default Stars;


