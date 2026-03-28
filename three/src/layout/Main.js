import React from "react";
import "./Main.css";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from '../components/Search'

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=d2e4b03e&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=d2e4b03e&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }



  render() {
    // console.log(this.state.movies);
    const { movies } = this.state;

    return (
      <div className="main">
        <div className="wrap">
            <Search searchMovies={this.searchMovies} />
          {movies.length ? <MovieList movies={movies} /> : <Preloader />
          }
        </div>
      </div>
    );
  }
}

export default Main;
