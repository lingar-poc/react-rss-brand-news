import logo from './logo.svg';
import './App.css';
import './components/app-structure/AppMain.css';
import {StaticTemplate} from "./components/static-template/StaticTemplate";
import {AppHeader} from "./components/app-structure/AppHeader";

function App() {
  return (
    <div className="App shell">

        <AppHeader/>
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
