import React, { useState } from 'react';
import './App.css';
import AddMovie from './AddMovie'
import MovieList from './Component/MovieList/MovieList'
import Filter from "./Component/Filter/Filter"

function App({ ListOfMovie }) {
  const [FinalListMovie, setFinalListMovie] = useState(ListOfMovie);
  const [text, setText] = useState("")

  //**function to update the movie with the new value of the componant AddMovie */
  let UpDateMovie = (movie) => {
    (movie.title === "") ? alert("Please Enter the title") : (movie.description === "") ?
      alert("Please Enter the description") : (movie.posteUrl === "") ?
        alert("Please Enter the posteUrl") : (movie.rate === 0) ? alert("Please Enter the rate") : setFinalListMovie([...FinalListMovie, movie]);
  }
  //**End of the AddMovie function */

  //**Function to pass as props to the filter componant to get the input value */
  const handleText = (text) => {
    setText(text)
  }
  //**end of the filter function that we will pass to the filter  */
  const [Rate, setRate] = useState(null);
  const handleRate = (rate) => {
    setRate(rate);
  }

  return (
    <div>

      <Filter handleText={handleText} handleRate={handleRate} />
      <AddMovie UpDateMovie={UpDateMovie} />
      <MovieList list={FinalListMovie} filterText={text} filterRate={Rate} />

    </div>

  );
}

export default App;
