import React, {useEffect} from "react";
import {getData, handleData} from "../../services/rss-data-service";

//cnn index - https://edition.cnn.com/services/rss/
const cnnUrl = "http://rss.cnn.com/rss/edition.rss";//latest
const cnnLatestUrl = "http://rss.cnn.com/rss/cnn_latest.rss";
const foxUrl = "http://feeds.foxnews.com/foxnews/latest";//latest
const cnbc = "https://www.cnbc.com/id/100003114/device/rss/rss.html";//latest
const myProxy = "https://lingar-allow-cors.herokuapp.com/";

export function PostsA(props) {

    useEffect(() => {
        console.log("PostA changed. props = ", props);
        getData(myProxy + cnnUrl, handleData);
        // getData(myProxy + cnnLatestUrl, handleData);


    });

    return (
        <div id="content">
            <div className="box">
                <h2><span>Coming soon... latest news from: <b>{props.provider}</b></span></h2>
                <a href="https://github.com/lingar-poc/react-rss-brand-news"
                   target="_blank" className="see-all">See The source code </a>
                <div className="cl">&nbsp;</div>
                {/*This is the posts container ... */}
                <div className="posts">
                    {/*Item 1*/}

                    {
                        props.postsData && props.postsData.length > 0 ?
                            props.postsData.map((item, idx) => {
                                return (
                                    <div className={idx % 2 === 0 ? "post " : "post last"} key={idx}>
                                        <div className="image"><a href="#"><img
                                            src={process.env.PUBLIC_URL + "/images/post-1.jpg"}
                                            alt=""/></a></div>
                                        <div className="data">
                                            <h4><a href="#">{item.title}</a>
                                            </h4>
                                            <p>{item.description} </p>
                                        </div>
                                    </div>
                                );

                            })
                            : <h1>Loading</h1>
                    }

                </div>
                {/*    End of posts element*/}
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );

}