import Movie from "./Movie";
import React from "react";
export default function Movies(props){
    const {movies}=props;
    
    return(
        <div className="movies">
            {movies.map(movie=>(
                <Movie key={movie.imdbID} {...movie}/>
            ))}
        </div>

    )
}