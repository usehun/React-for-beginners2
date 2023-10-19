import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, rating, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{rating}</p>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
