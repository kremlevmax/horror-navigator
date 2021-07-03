import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import TopNavbar from "./TopNavbar/TopNavbar";
import Browse from "./MovieListPages/Browse";
import Favorite from "./MovieListPages/Favorite";
import Watchlist from "./MovieListPages/Watchlist";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <TopNavbar />
        <Switch>
          <Route path='/' exact component={Browse} />
          <Route path='/favorite' component={Favorite} />
          <Route path='/watchlist' component={Watchlist} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
