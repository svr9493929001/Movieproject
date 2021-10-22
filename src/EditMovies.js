import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getFromStroage, updateStoredMovies } from "./getFromStroage";
import {
  BrowserRouter as Router,
  useParams,
  useHistory,
} from "react-router-dom";
export function Editmovie({ newMovie, setNewMovie }) {
  const { id } = useParams();
  const history = useHistory();
  const movie = getFromStroage("movies")[id];
  const [name, setName] = useState(movie.movie);
  const [poster, setPoster] = useState(movie.poster);
  const [description, setdescription] = useState(movie.description);
  const [trailer, setTrailer] = useState(movie.trailer);
  const editMovie = () => {
    // Find the element and update the data
    const Movie = {
      movie: name,
      poster: poster,
      description: description,
      trailer: trailer,
    };
    // Create copy of movies
    // Replace with edited movie
    let updatedMovies = [...newMovie]; // Create
    updatedMovies[id] = Movie; // Replace
    setNewMovie(updatedMovies);
    updateStoredMovies(updatedMovies);
    history.push("/Movies");
  };
  return (
    <div className="movie-form">
      <TextField
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter movie name"
      />
      <TextField
        id="outlined-basic"
        label="Poster URL"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter movie poster"
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(event) => setdescription(event.target.value)}
        placeholder="Enter movie description"
      />
      <TextField
        id="outlined-basic"
        label="Trailer URL"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Enter movie Trailer"
      />
      <Button variant="contained" onClick={editMovie}>
        Edit movie
      </Button>
    </div>
  );
}
