import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";
import {MockData1} from "../../services/mock-data";
import {getCnnData, getFoxData} from "../../services/rss-data-service";
import {cnnUrl, myProxy} from "../../SystemGlobals";


export function AppMainView() {
    const [allData, setAllData] = useState([]);
    const [cnnData, setCnnData] = useState([]);
    const [foxData, setFoxData] = useState([]);
    const [cnbcData, setCnbcData] = useState([]);

    useEffect(() => {
        console.log("Here will come all data - main view.");
        //    getCnnData(url, callback
        getCnnData(setCnnData);
        getFoxData(setFoxData);


    }, []);
    useEffect(() => {
        console.log("Change in cnn data ")
        console.log("THis = ");
        setAllData(allData.concat(cnnData));
    }, [cnnData]);

    useEffect(() => {
        console.log("Change in fox data ")
        console.log("THis = ");
        setAllData(allData.concat(foxData));
    }, [foxData]);

    return (
        <Switch>
            <Route path="/fox">
                <PostsA provider="fox" postsData = {foxData}/>
            </Route>
            <Route path="/cnbc">
                <PostsA provider="cnbc"/>
            </Route>
            <Route path="/cnn">
                <PostsA provider="cnn" postsData={cnnData}/>
            </Route>
            <Route path="/">
                <PostsA provider="ALL" postsData={true? allData: null}/>
            </Route>
            }
        </Switch>
    );
}
