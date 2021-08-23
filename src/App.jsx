import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import Search from "./components/Search";
import SignUp from "./components/SignUp";
import Trending from "./components/Trending";
import Tweets from "./components/Tweets";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Helmet>
          <title>Twoitter</title>
          <meta
            name="description"
            content="A twitter-like page with all the functionalities of the former but better."
          />
        </Helmet>
        <h1>Twoitter</h1>
        <Nav />
        <Switch>
          <Route exact path="/">
            <p>DefaultPage</p>
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/trending">
            <Trending />
          </Route>

          <Route path="/tweets">
            <Tweets />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
