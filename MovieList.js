import React from "react";

const MovieList = (props) => {
  let { item } = props;
  let { Title, Year, imdbID, Poster, Type } = item;

  return (
    <div className="app-data">
      <div className="movie-data">
        <p>Title:{Title}</p>
        <p>Year:{Year}</p>
        <p>imdbID:{imdbID}</p>
        <p>Type:{Type}</p>
        <div className="img-container">
          <img src={Poster} alt="Image not Found" className="img"/>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
