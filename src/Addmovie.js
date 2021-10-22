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
export function Addmovie({ newMovie, setNewMovie}) {
  const { id } = useParams();
  const movie = getFromStroage("movies")[id];
  const history = useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setdescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie = () => {
    const Movie = {
      movie: name,
      poster: poster,
      description: description,
      trailer: trailer,
    };
    setNewMovie([...newMovie, Movie]);
    localStorage.setItem("movies", JSON.stringify([...newMovie, Movie]));
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
      <Button variant="contained" onClick={addMovie}>
        Add movie
      </Button>
    </div>
  );
}
