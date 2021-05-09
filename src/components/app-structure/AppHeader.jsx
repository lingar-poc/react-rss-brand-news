import React from "react";
import "./AppMainStyle.css";
import {AppNavigator} from "./AppNavigator";

export function AppHeader() {

    return (
        <header>

            <div id="header">
                <h1 id="logo"><a href="#">MEGAZZINE</a></h1>
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