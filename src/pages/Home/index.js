import { ApiKey } from "../../config/key"
import style from "./styles-home.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home(){

const [movies, setMovies] = useState([])
const image = 'https://image.tmdb.org/t/p/w500'

  useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
    .then((response) => response.json())
    .then( data => setMovies(data.results))
}, [])


   return(
    <div className={style.container}>
        <h1>Movies</h1>
        <div>
        <div className={style.movielist}>
            {movies.map(movie => {
                  return (
                  <div className={style.movie} key={movie.id}>
                    <Link to={`/details/${movie.id}`}> <img src={`${image}${movie.poster_path}`} alt={movie.title}/></Link>
                    <h5 className={style.title}>{movie.title}</h5>
                  </div>)
            }
              )}
        </div>
        </div>
    </div>
   ) 
}

export default Home