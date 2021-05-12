import React, {useState, useEffect, useLayoutEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {PostsA} from "../posts-pages/PostsA";
import {MockData1} from "../../services/mock-data";
import {getCnbcData, getCnnData, getFoxData} from "../../services/rss-data-service";
import {cnnUrl, myProxy} from "../../SystemGlobals";


export function AppMainView() {
    let arr = ["a", "b","c","d","e"];
    console.log("arr = ", arr);
    console.log("arr after shuffle = ", shakeArray(arr))
    const [allData, setAllData] = useState([]);
    const [shuffledData, setshuffledData] = useState([]);

    const [cnnData, setCnnData] = useState([]);
    const [foxData, setFoxData] = useState([]);

    const [cnbcData, setCnbcData] = useState([]);

    useLayoutEffect(() => {
        console.log("Here will come all data - main view.");
        //    getCnnData(url, callback
        getCnnData(setCnnData);
        getFoxData(setFoxData);
        getCnbcData(setCnbcData);
        console.log("finished useEffect1")


    }, []);
    useLayoutEffect(() => {
        console.log("Change in cnn data ")
        console.log("THis = ");
        setAllData(allData.concat(cnnData));
        // setAllData(shakeArray(allData));


        // setAllData(shakeArray(allData));

    }, [cnnData]);

    useLayoutEffect(() => {
        console.log("Change in fox data ")
        console.log("THis = ");
        setAllData(allData.concat(foxData));
        // shakeArray(allData);
        // setAllData(shakeArray(allData));

        // console.log("shaked array = " , shakeArray(allData))
        // setAllData(shakeArray(allData));
    }, [foxData]);


    useLayoutEffect(() => {
        console.log("Change in cnbc data ")
        console.log("THis = ");
        setAllData(allData.concat(cnbcData));
        // shakeArray(allData);
        // setAllData(shakeArray(allData));

        // console.log("shaked array = " , shakeArray(allData))
        // setAllData(shakeArray(allData));
    }, [cnbcData]);
    useLayoutEffect(() => {
        console.log("Change in all data ")

        setshuffledData(shakeArray(allData));
        // shakeArray(allData);
        // setAllData(shakeArray(allData));

        // console.log("shaked array = " , shakeArray(allData))
        // setAllData(shakeArray(allData));
    }, [allData]);

    return (
        <Switch>
            <Route path="/fox">
                <PostsA provider="fox" postsData={foxData}/>
            </Route>
            <Route path="/cnbc">
                <PostsA provider="cnbc" postsData = {cnbcData}/>
            </Route>
            <Route path="/cnn">
                <PostsA provider="cnn" postsData={cnnData}/>
            </Route>
            <Route path="/">
                <PostsA provider="ALL" postsData={true ? shuffledData : null}/>
            </Route>
            }
        </Switch>
    );
}


/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shakeArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}