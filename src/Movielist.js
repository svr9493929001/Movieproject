import * as React from "react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Movie } from "./Movie";
export function Movielist() {
  const [newMovie, setNewMovie] = useState([]);
  const getMovies = () => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setNewMovie(mvs));
  };
  useEffect(getMovies, []);
  const deleteMovies = (id) => {
    console.log(id);
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => getMovies());
  };
  return (
    <div className="App">
      {newMovie.map((movies, i) => {
        return (
          <div>
            <Movie
              deleteMovieButton={
                <IconButton
                  style={{
                    marginLeft: "auto",
                  }}
                  aria-label="delete"
                  color="error"
                  component="span"
                  onClick={() => {
                    deleteMovies(movies.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              key={movies.id}
              name={movies.movie}
              poster={movies.poster}
              description={movies.description}
              id={movies.id}
            />
          </div>
        );
      })}
    </div>
  );
}
