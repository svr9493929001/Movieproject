import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useHistory,
  useParams
} from "react-router-dom";
import { getFromStroage } from "./getFromStroage";

export function MovieDetails() {
  const { id } = useParams();
  const movie = getFromStroage("movies")[id];
  const history = useHistory();
  return (
    <div>
      <iframe
        width="703"
        height="395"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <h1>{movie.movie}</h1>
        <p>{movie.description}</p>
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