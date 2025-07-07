import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const movies = [
    { id: 1, title: "tit1", release_date: "2022" },
    { id: 2, title: "tit1", release_date: "2022" },
    { id: 3, title: "tit1", release_date: "2022" },
    { id: 4, title: "tit1", release_date: "2022" },
    { id: 5, title: "tit1", release_date: "2022" },
    { id: 6, title: "tit1", release_date: "2022" },
  ];

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery('')
  }

  return (
    <div>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
