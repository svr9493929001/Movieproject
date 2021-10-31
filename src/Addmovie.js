import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { getFromStroage, updateStoredMovies } from "./getFromStroage";
import {
  BrowserRouter as Router,
  useParams,
  useHistory,
} from "react-router-dom";
export function Addmovie() {
  const { id } = useParams();
  const [newMovie, setNewMovie] = useState([]);
  const history = useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setdescription] = useState("");
  const [trailer, setTrailer] = useState("");
  const createMovie = (newMovie) => {
    // 1. method - POST
    // 2. body - data and stringify
    // 3. header - JSON
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => history.push("/Movies"));
  };
  const addMovie = () => {
    const Movie = {
      movie: name,
      poster: poster,
      description: description,
      trailer: trailer,
    };
    createMovie(Movie);
  };
  const getMovies = () => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setNewMovie(mvs));
  };
  useEffect(getMovies, []);
  return (
    <div className="movie-form" style={{height:"100vh"}}>
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
// const AddvalidationSchema = yup.object({
//       email: yup
//         .string()
//         .min(5, "Enter valid Email adress")
//         .required("Please provied an email adress")
//         .matches(
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test,
//           "parttern not matched"
//         ),
//       password: yup
//         .string()
//         .min(8, "Enter valid Email password")
//         .max(12, "Please Enter valid Email password")
//         .required("Please Enter valid Email password"),
//     })

// export function Addmovie() {
//   const { id } = useParams();
//   const history = useHistory();
//   const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
//   useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema:AddvalidationSchema,
//     onSubmit: (values) => {
//       console.log("onSubmit", values);
//     },
//   });
//   const createMovie = (newMovie) => {
//     // 1. method - POST
//     // 2. body - data and stringify
//     // 3. header - JSON
//     fetch("https://6120e98624d11c001762ee23.mockapi.io/movies", {
//       method: "POST",
//       body: JSON.stringify(newMovie),
//       headers: { "Content-type": "application/json" },
//     })
//       .then((data) => data.json())
//       .then((data) => history.push("/Movies"));
//   };
//   const addMovie = () => {
//     const Movie = {
//       movie: name,
//       poster: poster,
//       description: description,
//       trailer: trailer,
//     };
//     createMovie(Movie);
//   };
//   const getMovies = () => {
//     fetch("https://6120e98624d11c001762ee23.mockapi.io/movies", {
//       method: "GET",
//     })
//       .then((data) => data.json())
//       .then((mvs) => setNewMovie(mvs));
//   };
//   useEffect(getMovies, []);
//   return (
//     <div className="movie-form" style={{ height: "100vh" }}>
//       <TextField
//         id="email"
//         name="email"
//         type="email"
//         value={values.email}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         placeholder="Enter movie name"
//       />
//       {/* <TextField
//         id="outlined-basic"
//         label="Poster URL"
//         variant="outlined"
//         value={poster}
//         onChange={(event) => setPoster(event.target.value)}
//         placeholder="Enter movie poster"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         value={description}
//         onChange={(event) => setdescription(event.target.value)}
//         placeholder="Enter movie description"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Trailer URL"
//         variant="outlined"
//         value={trailer}
//         onChange={(event) => setTrailer(event.target.value)}
//         placeholder="Enter movie Trailer"
//       /> */}
//       <Button variant="contained" onClick={addMovie}>
//         Add movie
//       </Button>
//     </div>
//   );
// }