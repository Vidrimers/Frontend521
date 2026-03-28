import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    // console.log(this.state.search)

    return (
      <>
        <div className="search">
          <input
            type="search"
            placeholder="search777"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="searchBtn"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
        <div className="radio">
          <input type="radio" name="type" value="1" id="all" /> <label htmlFor='all'>All</label>
          <input type="radio" name="type" value="2" id="movies" /> <label htmlFor='movies'>Movies</label>
          <input type="radio" name="type" value="3" id="series" /> <label htmlFor='series'>Series</label>
          <input type="radio" name="type" value="4" id="game" /> <label htmlFor='game'>Game</label>
        </div>
      </>
    );
  }
}

export default Search;
