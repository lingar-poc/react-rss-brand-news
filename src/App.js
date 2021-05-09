import logo from './logo.svg';
import './App.css';
import './components/app-structure/AppMainStyle.css';
import {StaticTemplate} from "./components/static-template/StaticTemplate";
import {AppHeader} from "./components/app-structure/AppHeader";
import {AppMainArea} from "./components/app-structure/AppMainArea";
import {PostsA} from "./components/posts-pages/PostsA";
import {AppFooter} from "./components/app-structure/AppFooter";

function App() {
  return (
    <div className="App shell">

        <AppHeader/>
        <AppMainArea>
            <PostsA/>
        </AppMainArea>
        <AppFooter/>
    </div>
  );



      {/*<header className="App-header">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*<StaticTemplate/>*/}
      {/*<header>*/}
      {/*    /!*<StaticTemplate/>*!/*/}
      {/*    */}
      {/*</header>*/}


}

export default App;
