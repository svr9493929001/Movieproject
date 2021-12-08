import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useHistory,
  useParams
} from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [newMovie, setNewMovie] = useState({});
  console.log(id)
  const getMovies = () => {
    fetch("https://movie-app-srivardhan.herokuapp.com/movies/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setNewMovie(mvs));
  };
  useEffect(getMovies, [id]);
  return (
    <div style={{height : "100vh"}}>
      <iframe
        width="703"
        height="395"
        src={newMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <h1>{newMovie.name}</h1>
        <p>{newMovie.summary}</p>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
