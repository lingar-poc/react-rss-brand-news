import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";


export function AppMainView() {

    return (
            <Switch>
                <Route path="/fox">
                    <PostsA provider="FOX"/>
                </Route>
                <Route path="/cbs">
                    <PostsA provider="CBS"/>
                </Route>
                <Route path="/cnn">
                    <PostsA provider="CNN"/>
                </Route>
                <Route path="/">
                    <PostsA provider="ALL"/>
                </Route>
            </Switch>
    );
}
