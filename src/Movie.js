import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";

export function Movie({ name, poster, description, deleteMovieButton, id }) {
  const [Show, setShow] = useState(true);
  const [Nice, setNice] = useState("");
  const history = useHistory();
  const h = useHistory();
  useEffect(() => {
    console.log("State or props is changes", Show, Nice);
  }, [Show]);
  const styles = { display: Show ? "block" : "none" };
  return (
    <Card className="container">
      <img src={poster} />
      <CardContent>
        <h1>
          {name}{" "}
          <IconButton
            onClick={() => {
              history.push(`/movies/${id}`);
            }}
            color="primary"
            aria-label="Detail Info about movie"
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              h.push(`/movies/edit/${id}`);
            }}
            color="primary"
            aria-label="Edit movie"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => setShow(!Show)}
            aria-label="Delete movie"
            color="primary"
          >
            {Show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </h1>
        <p style={styles}>{description}</p>
        <CardActions>
          <Counter />
          {deleteMovieButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
