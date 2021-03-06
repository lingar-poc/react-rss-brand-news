import React from "react";
import {NavLink} from "react-router-dom";

export function AppNavigator() {
    return (


        <div id="navigation">
            <ul>
                <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                <li><NavLink to="/fox" activeClassName="active">FOX</NavLink></li>
                <li><NavLink to="/cnbc" activeClassName="active">CNBC</NavLink></li>
                <li><NavLink to="/cnn" activeClassName="active">CNN</NavLink></li>

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