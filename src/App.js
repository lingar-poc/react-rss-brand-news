import './App.css';
import './components/app-structure/AppMainStyle.css';
import {AppHeader} from "./components/app-structure/AppHeader";
import {AppMainArea} from "./components/app-structure/AppMainArea";
import {AppFooter} from "./components/app-structure/AppFooter";
import {AppMainView} from "./components/app-structure/AppMainView";
// import {BrowserRouter as Router} from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";

import "./components/app-structure/AppMainStyle.css";
import {AppContainer} from "./components/app-structure/AppContainer";

/**
 *Website:
 * https://lingar-poc.github.io/react-rss-brand-news/
 *
 * U can npm run deploy for deploying it.(the current version will be deployed)
 *
 *
 * Branch: A-App-Structure-with-a-template
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    return (
        <div className="">
            <Router>
                <AppContainer>

                    <AppHeader/>
                    <AppMainArea>
                        <AppMainView/>
                        {/*<PostsA provider = "All"/>*/}

                    </AppMainArea>
                    <AppFooter/>
                </AppContainer>


            </Router>

        </div>
    );


    {/*<header className="App-header">*/
    }
    {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/
    }
    {/*  <p>*/
    }
    {/*    Edit <code>src/App.js</code> and save to reload.*/
    }
    {/*  </p>*/
    }
    {/*  <a*/
    }
    {/*    className="App-link"*/
    }
    {/*    href="https://reactjs.org"*/
    }
    {/*    target="_blank"*/
    }
    {/*    rel="noopener noreferrer"*/
    }
    {/*  >*/
    }
    {/*    Learn React*/
    }
    {/*  </a>*/
    }
    {/*</header>*/
    }
    {/*<StaticTemplate/>*/
    }
    {/*<header>*/
    }
    {/*    /!*<StaticTemplate/>*!/*/
    }
    {/*    */
    }
    {/*</header>*/
    }


}

export default App;
