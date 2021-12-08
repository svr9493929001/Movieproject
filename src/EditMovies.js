import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  useParams,
  useHistory,
} from "react-router-dom";
export function Editmovie() {
  const [newMovie, setNewMovie] = useState({});
  const getMovies = () => {
    fetch("https://movie-app-srivardhan.herokuapp.com/movies/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => {
        setNewMovie(mvs);
        setName(mvs.name);
        setPoster(mvs.poster);
        setdescription(mvs.summary);
        setTrailer(mvs.trailer);
      });
  };
  console.log(newMovie);
  const { id } = useParams("");
  useEffect(getMovies, [id]);
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
    fetch("https://movie-app-srivardhan.herokuapp.com/movies/" + id, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => history.push("/Movies"));
  }; 
  const editMovie = () => {
    const Movie = {
      name: name,
      poster: poster,
      summary: description,
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
