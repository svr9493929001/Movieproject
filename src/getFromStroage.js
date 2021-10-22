export function getFromStroage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function updateStoredMovies(updateMovies) {
  return localStorage.setItem("movies", JSON.stringify(updateMovies));
}

// seting Data  : stringify -> localStroage
// getting Data :  localStroage -> parse