import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

import { useContext } from "react";

import FavoriteMovieListContext from "../store/favorite-movie-list-context";

const movieList = [
  {
    name: "Shining",
    year: 1980,
    poster:
      "https://resizing.flixster.com/vF7Sn9rMCY-MgHaxF0m5-d2iQzA=/206x305/v2/https://flxt.tmsimg.com/assets/p40_p_v10_ap.jpg",
  },
  {
    name: "Terminator II",
    year: 1991,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    name: "Alien",
    year: 1979,
    poster:
      "https://upload.wikimedia.org/wikipedia/ru/c/c3/Alien_movie_poster.jpg",
  },
  {
    name: "The VVitch",
    year: 2005,
    poster:
      "https://i.pinimg.com/originals/0c/22/f9/0c22f988cc41108c275efb34e195271f.jpg",
  },
  {
    name: "Ghostbusters",
    year: 1984,
    poster:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/ghostbusters-ghost-busters-vintage-movie-poster-original-1-sheet-27x41-5814_300x@2x.jpg?v=1620968471",
  },
];

const Browse = () => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);

  return (
    <div>
      {movieList.map((item, index) => {
        const addedToFavoriteElement = favoriteMovieListContext.favoriteMoviesList.find(
          (entry) => entry.name === item.name
        );
        let isAddedToFavoriteElement =
          addedToFavoriteElement === undefined ? false : true;

        const onClickFavoriteHandler = (event) => {
          event.preventDefault();
          if (isAddedToFavoriteElement) {
            favoriteMovieListContext.removeFromFavoriteMoviesList(item.name);
          } else {
            favoriteMovieListContext.addToFavoriteMoviesList(item);
            isAddedToFavoriteElement = true;
          }
        };

        const addedToWatchlistElement = favoriteMovieListContext.watchlist.find(
          (entry) => entry.name === item.name
        );
        let isAddedToWatchlistElement =
          addedToWatchlistElement === undefined ? false : true;

        const onClickWatchlistHandler = (event) => {
          event.preventDefault();
          console.log(isAddedToWatchlistElement);
          console.log(favoriteMovieListContext.watchlist);
          if (isAddedToWatchlistElement) {
            console.log("++");
            favoriteMovieListContext.removeFromWatchlist(item.name);
          } else {
            favoriteMovieListContext.addToWatchlist(item);
            isAddedToWatchlistElement = true;
          }
        };

        return (
          <MovieCard
            key={index}
            onClickFavoriteHandler={onClickFavoriteHandler}
            onClickWatchlistHandler={onClickWatchlistHandler}
            favoriteButtonName='Add To Favorite'
            watchlistButtonName='Add To Watchlist'
            isItemAddedToFavorite={isAddedToFavoriteElement}
            isItemAddedToWatchlist={isAddedToWatchlistElement}
          >
            <img src={item.poster} alt={item.name} className={styles.poster} />
            {item.name}
          </MovieCard>
        );
      })}
    </div>
  );
};

export default Browse;
