import { ApiKey } from "../../config/key"
import { Container, MoviesList, Movie } from "./styles";
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
    <Container>
      <h1>Movies</h1>
      <MoviesList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}> <img src={`${image}${movie.poster_path}`} alt={movie.title}/></Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MoviesList>
    </Container>
   ) 
}

export default Home