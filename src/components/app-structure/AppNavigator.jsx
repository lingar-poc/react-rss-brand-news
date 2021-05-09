import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";

export function AppNavigator() {
    return (


        <div id="navigation">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/fox" className="active">FOX</Link></li>
                <li><Link to="/cbs">CBS</Link></li>
                <li><Link to="/cnn">CNN</Link></li>
                {/*<li><a href="#">ABOUT</a></li>*/}
                {/*<li><a href="#">CONTACT</a></li>*/}
            </ul>
            <div className="cl">&nbsp;</div>
        </div>)
}


/*
 <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        //
        // {/* A <Switch> looks through its children <Route>s and
        //     renders the first one that matches the current URL. }
<Switch>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/users">
        <Users />
    </Route>
    <Route path="/">
        <Home />
    </Route>
</Switch>
</div>
</Router>
 */