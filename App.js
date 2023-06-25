import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import "./App.scss";

const App = () => {
  const [searchText, setSearchText] = useState("Batman");
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState([]);

  const searchMovie = async () => {
    if (searchText !== "") {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${searchText}&apikey=bb1b7d8e`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.response === "False" || data.response === false) {
            setError(true);
          } else {
            setError(false);
          }
          return data;
        });
      setMovie(res.Search);
    } else {
      setError(false);
    }
  };
  useEffect(() => {
    searchMovie();
  });
  const movieTextHandler = (e) => {
    let search = e.target.value;
    setSearchText(search);
  };
  const movieSearchHandler = async (Title) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${Title}&apikey=bb1b7d8e`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.Response === false || data.Response === "False") {
          setError(true);
        } else {
          setError(false);
        }
        return data;
      });
    setMovie(res);
  };

  return (
    <div className="App">
      <div className="input-button">
        <input type="text" onChange={(e) => movieTextHandler(e)} placeholder="Search Movie...."/>
        <button onClick={() => movieSearchHandler()}>Search</button>
      </div>
      <div className="data-container">
        {movie &&
          movie.length > 0 &&
          movie.map((item, index) => {
            return <MovieList key={index} item={item} />;
          })}
      </div>
      {error && <div>no search Found</div>}
    </div>
  );
};
export default App;
