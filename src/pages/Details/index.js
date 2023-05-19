import { Link, useParams } from "react-router-dom"
import { useState} from "react"
import { useEffect } from "react"
import { ApiKey } from "../../config/key"
import { Container } from "./styles";



function Details(){
const {id} = useParams()     
const [movie,setMovie] = useState({})
const image = 'https://image.tmdb.org/t/p/w500'

useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
      .then((response) => response.json())
      .then( data => {
      const movie ={
        id,
        title: data.title,
        sinopse: data.overview,
        image:`${image}${data.poster_path}`,
        releaseDate: data.release_date
    }
    setMovie(movie)
      })
  }, [id])

    return (

      <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse:{movie.sinopse}</span>
        <h2 className="release-date">Release date: {movie.releaseDate}</h2>
        <Link to='/'> <button>Go Back</button></Link>
        </div>
      </div>
    </Container>
  
    )
}

export default Details 