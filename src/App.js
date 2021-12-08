import { useState} from "react";
import "./App.css";
import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import AlarmIcon from "@mui/icons-material/Alarm";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import MailIcon from "@mui/icons-material/Mail";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Switch,
  Route,
  Link,
  //useParams,
  // useHistory,
} from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
// import { style } from "@mui/system";
import { Color } from "./Color";
import { MovieDetails } from "./MovieDetails";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { getFromStroage, updateStoredMovies } from "./getFromStroage";
// import { names } from "./names";
import { Addmovie } from "./Addmovie";
import { Editmovie } from "./EditMovies";
// import Edit from "@mui/icons-material/Edit";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { Movielist } from "./Movielist";
import Paper from "@mui/material/Paper";
import { About } from "./About";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

function App() {
  const [Theam,setTheam] = useState(true)
const theme = createTheme({
  palette : {
    mode : Theam ? "light"  : "dark",
  }
});
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <section>
          <AppBar position="static">
            <Toolbar className="main-menu">
              <Link to="/Home">Home</Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/ADDMOVIES">Add Movies</Link>
              <Link to="/About">About</Link>
              <Link to="/Colorgame">Color game</Link>
              <Button>
                <IconButton>
                  <DarkModeIcon onClick={() => setTheam(!Theam)}></DarkModeIcon>
                </IconButton>
              </Button>
            </Toolbar>
          </AppBar>
          <div classname="main-content">
            <Switch>
              <Route exact path="/Home">
                Home
              </Route>
              <Route exact path="/Movies">
                Movies Page
                <Movielist></Movielist>
              </Route>
              <Route exact path="/Movies/:id">
                <MovieDetails />
              </Route>
              <Route exact path="/About">
                About Page
                <About />
              </Route>
              <Route exact path="/Colorgame">
                <Color />
              </Route>
              <Route exact path="/Movies/edit/:id">
                Edit movie
                <Editmovie />
              </Route>
              <Route exact path="/ADDMOVIES">
                Add Movies
                <Addmovie />
              </Route>
            </Switch>
          </div>
        </section>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
