import "./Movie.css";

function Movie(props) {
  const { Title, Year, Type, Poster } = props;
  return (
    <div className="card">
      {Poster === "N/A" ||
      Poster ===
        "https://m.media-amazon.com/images/M/MV5BZGY1NmNlZDUtNDRkYy00YTE0LWJhZmQtMDU3ZGMwYzliYjAwXkEyXkFqcGdeQXVyMjU0MzI5MQ@@._V1_SX300.jpg" ||
      Poster ===
        "https://m.media-amazon.com/images/M/MV5BMThlNDc4MGUtMDM1NS00MTFlLTgzMzYtMGIwZDNhMWM3MGM5XkEyXkFqcGdeQXVyNz9SMTExNTQ@._V1_SX300.jpg" ||
      Poster ===
        "https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjd1NTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg" ? (
        <img src={"https://picsum.photos/300/400?blur"} alt="Poster" />
      ) : (
        <img src={Poster} alt="Poster" />
      )}

      <div>
        <h3>{Title}</h3>
        <p>
          {Year} <span>{Type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
