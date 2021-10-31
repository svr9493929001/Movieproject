import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getFromStroage, updateStoredMovies } from "./getFromStroage";
import {
  BrowserRouter as Router,
  useParams,
  useHistory,
} from "react-router-dom";
export function Editmovie() {
  const [newMovie, setNewMovie] = useState({});
  const getMovies = () => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => {
        setNewMovie(mvs);
          setName(mvs.movie);
          setPoster(mvs.poster);
          setdescription(mvs.description);
          setTrailer(mvs.trailer);
      });
  };
  useEffect(getMovies, []);
  const { id } = useParams("");
  const history = useHistory("");
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setdescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const updateMovie = (editedMovie) => {
    // POST & DELETE
    // 1. method - PUT
    // 2. body - data and stringify
    // 3. header - JSON
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies/" + id, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => history.push("/Movies"));
  }; 
  const editMovie = () => {
    const Movie = {
      movie: name,
      poster: poster,
      description: description,
      trailer: trailer,
    };
    updateMovie(Movie);
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
