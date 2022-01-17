import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search"
export default class Main extends React.Component {
    state={
        movies:[ ],
        loading:true
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=f4efddb3&s=Iron')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    searchMovies=(str)=>{
      fetch(`http://www.omdbapi.com/?apikey=f4efddb3&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
    }
  render() {
    return(
    <div className="container content">
      <Search  searchMovie={this.searchMovies}/>
      {this.state.movies.length?(
        <Movies movies={this.state.movies}/>):<Loader />}
    </div>

    )
  }
}
