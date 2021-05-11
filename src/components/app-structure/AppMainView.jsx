import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";
import {MockData1} from "../../services/mock-data";


export function AppMainView() {
    const [cnnData, setCnnData] = useState([]);
    // const [cnnData, setCnnData] = useState(MockData1);
    useEffect(() => {
        //U need to do it at the useState creation, for make it before the rendering.
        //TODO- it's not good practice. U do unnecessary things. It's just for starting.
        setCnnData(MockData1);
    }, []);

    return (
        <Switch>
            <Route path="/fox">
                <PostsA provider="FOX"/>
            </Route>
            <Route path="/cnbc">
                <PostsA provider="CNBC"/>
            </Route>
            <Route path="/cnn">
                {/*{alert("sss")} - won't work*/}

                <PostsA provider="CNN"/>
            </Route>
            {/*<Route path="/">*/}
            {/*    /!*pass here the data*!/*/}
            {/*    <PostsA provider="ALL"/>*/}
            {/*</Route>*/}
            {
                <Route path="/">

                    <PostsA provider="ALL" postsData = {cnnData}/>
                </Route>
            }
        </Switch>
    );
}
