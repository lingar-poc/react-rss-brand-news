import React from "react";
import "./AppMainStyle.css";
import {AppNavigator} from "./AppNavigator";

export function AppHeader() {

    return (
        <header>
            {/*TODO - Make proper logo. */}
            <div id="header">
                <div id="logo">
                    <h1 ><a href="#"><span id ="logo-p1">BRAND</span><span id = "logo-p2">NEWS</span> </a></h1>
                    <h2>Done with love by <a href= "https://www.linkedin.com/in/izhar-mashkif-86a01913a/" target = "_blank">Lingar</a> </h2>

                </div>

                <div className="top-bar">
                    <div className="links"><a href="#">SIGN IN</a> <a href="#">SIGN UP</a> <a href="#"
                                                                                              className="rss">SUBSCRIBE</a>
                    </div>
                    <div className="cl">&nbsp;</div>
                    <div id="search">
                        <form action="#" method="post">
                            <label htmlFor="search-string">IM LOOKING FOR</label>
                            <div className="fields">
                                <input type="text" value="..." id="search-string" className="field"/>
                                <input type="submit" value="" className="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <AppNavigator/>

        </header>
    )
}