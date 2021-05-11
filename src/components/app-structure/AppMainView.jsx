import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";
import {MockData1} from "../../services/mock-data";
import {getData} from "../../services/rss-data-service";
import {cnnUrl, myProxy} from "../../SystemGlobals";


export function AppMainView() {
    const [allData, setAllData]= useState([]);
    const [cnnData, setCnnData] = useState([]);
    const [foxData, setFoxData]= useState([]);
    const [cnbcData, setCnbcData] = useState([]);
    useEffect(() => {
        //U need to do it at the useState creation, for make it before the rendering.
        //TODO- it's not good practice. U do unnecessary things. It's just for starting.
        // setCnnData(MockData1);
        console.log("Here will come all data - main view.");
    //    getData(url, callback
        getData(myProxy + cnnUrl ,setCnnData);


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
