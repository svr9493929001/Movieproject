import { useState } from "react";
import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { style } from "@mui/system";
import { Color } from "./Color";
import { Movie } from "./Movie";
import { MovieDetails } from "./MovieDetails";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getFromStroage, updateStoredMovies } from "./getFromStroage";
import { names } from "./names";
import { Addmovie } from "./Addmovie";
import { Editmovie } from "./EditMovies";
import Edit from "@mui/icons-material/Edit";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;
localStorage.setItem("movies", JSON.stringify(names));
function App() {
  const { id } = useParams();
  const movie = getFromStroage("movies")[id];
  const [newMovie, setNewMovie] = useState(getFromStroage("movies"));
  const Type ="Edit";

  return (
    <section>
      <AppBar position="static">
        <Toolbar className="main-menu">
          <Link to="/Home">Home</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/ADDMOVIES">Add Movies</Link>
          <Link to="/About">About</Link>
          <Link to="/Colorgame">Color game</Link>
        </Toolbar>
      </AppBar>
      <div classname="main-content">
        <Switch>
          <Route exact path="/Home">
            Home
          </Route>
          <Route exact path="/Movies">
            Movies Page
            <div className="App">
              {newMovie.map((movies, i) => {
                return (
                  <div>
                    <Movie
                      deleteMovieButton={
                        <IconButton
                          style={{ marginLeft: "auto" }}
                          aria-label="delete"
                          color="error"
                          component="span"
                          onClick={() => {
                            const removeidx = i;
                            setNewMovie(
                              newMovie.filter((mv, i) => i != removeidx)
                            );
                            updateStoredMovies(
                              newMovie.filter((mv, idx) => idx != removeidx)
                            );
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                      key={i}
                      name={movies.movie}
                      poster={movies.poster}
                      description={movies.description}
                      id={i}
                    />
                  </div>
                );
              })}
            </div>
          </Route>
          <Route exact path="/Movies/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/About">
            About Page
          </Route>
          <Route exact path="/Colorgame">
            <Color />
          </Route>
          <Route exact path="/Movies/edit/:id">
            Edit movie
            <Editmovie newMovie={newMovie} setNewMovie={setNewMovie} />
          </Route>
          <Route path="/ADDMOVIES">
            Add Movies
            <Addmovie newMovie={newMovie} setNewMovie={setNewMovie} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default App;

