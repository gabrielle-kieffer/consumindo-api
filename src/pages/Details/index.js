import { Link, useParams } from "react-router-dom"
import { useState} from "react"
import { useEffect } from "react"
import { ApiKey } from "../../config/key"

import style from './styles.css'

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

            <div className={style.principal}>
              <div className={style.img}>
               <img  src={movie.image} alt={movie.sinopse} />
              </div>
               <div className={style.details}>
                <h2>{movie.title}</h2>
                <h3 >Overview: </h3>
                <span> {movie.sinopse}</span>
                <p className={style.release}>Realese date: {movie.releaseDate}<br /></p>
                <Link to='/'> <button>Go Back</button></Link>
               </div>
            </div>
  
    )
}

export default Details 