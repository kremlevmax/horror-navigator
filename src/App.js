import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import FavoriteMovieListContextProvider from "./store/FavoriteMovieListContextProvider";
import Header from "./Header/Header";
import TopNavbar from "./TopNavbar/TopNavbar";
import Browse from "./MovieListPages/Browse";
import Favorite from "./MovieListPages/Favorite";
import Watchlist from "./MovieListPages/Watchlist";

const App = () => {
  return (
    <FavoriteMovieListContextProvider>
      <Header />
      <BrowserRouter>
        <TopNavbar />
        <Switch>
          <Route path='/browse' exact component={Browse} />
          <Route path='/favorite' component={Favorite} />
          <Route path='/watchlist' component={Watchlist} />
        </Switch>
      </BrowserRouter>
    </FavoriteMovieListContextProvider>
  );
};

export default App;
