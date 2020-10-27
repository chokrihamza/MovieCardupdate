import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
function MovieList({ list, filterText, filterRate }) {

  let x = list.filter(el => (el.title.toLowerCase().includes(filterText.toLowerCase())))
  if (filterRate === null) {
    return (

      <div className="MovieList__style">
        {list.filter(el => (el.title.toLowerCase().includes(filterText.toLowerCase())) || el.rate >= filterRate)
          .map((el, i) => (<MovieCard key={i} movie={el} />
          ))}
      </div>
    )

  }
  return (
    <div className="MovieList__style">

      {x.filter(el => el.rate == filterRate)
        .map((el, i) => (<MovieCard key={i} movie={el} />
        ))}
    </div>
  )

}




export default MovieList
