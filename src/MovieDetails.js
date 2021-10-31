import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useHistory,
  useParams
} from "react-router-dom";
import { getFromStroage } from "./getFromStroage";

export function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [newMovie, setNewMovie] = useState({});
  const getMovies = () => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setNewMovie(mvs));
  };
  useEffect(getMovies, [id]);
  return (
    <div>
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
        <h1>{newMovie.movie}</h1>
        <p>{newMovie.description}</p>
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
