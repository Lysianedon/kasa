import '../styles/stars.scss';
import filledStar from "../assets/filledStar.png";
import emptyStar from "../assets/emptyStar.png";

export default function Star({ rating }) {
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    const score = i;
    stars.push(
      <img
      className="star"
        key={i}
        src={i < rating ? filledStar : emptyStar}
        alt="rating star"
      />
    );
  }

  return <div id="stars">{stars}</div>;
}
