import React from 'react';
import "./AppMainStyle.css";


export function AppMainArea(props){

    return (
        <main>

            <div id="main">
                {props.children}
                <div id="sidebar">
                    <div className="nav-box">
                        <h2><span>CATEGORIES</span></h2>
                        <ul>
                            <li><a href="#">Cras nec lorem lecturs</a></li>
                            <li><a href="#">Nunc pell entesq</a></li>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Amet sit laoreet</a></li>
                            <li><a href="#">Lectus sit amet</a></li>
                            <li><a href="#">Pellenstesuq nunc lorem</a></li>
                        </ul>
                    </div>
                    <div className="nav-box">
                        <h2><span>ARCHIVES</span></h2>
                        <ul>
                            <li><a href="#">August 2009</a></li>
                            <li><a href="#">July 2009</a></li>
                            <li><a href="#">June 2009</a></li>
                            <li><a href="#">May 2009</a></li>
                        </ul>
                    </div>
                    <div className="nav-box">
                        <h2><span>TAGS</span></h2>
                        <ul>
                            <li><a href="#">Pellenstesque</a></li>
                            <li><a href="#">Nunc lorem</a></li>
                            <li><a href="#">Lectus sit</a></li>
                            <li><a href="#">Sit laoreet</a></li>
                            <li><a href="#">Sit amet</a></li>
                            <li><a href="#">Laoreet lectus nunc</a></li>
                        </ul>
                    </div>
                </div>
                <div id="banners">
                    <div className="banner"><a href="#"><img src="images/small-banner.gif" alt=""/></a></div>
                    <div className="banner"><a href="#"><img src="images/big-banner.gif" alt=""/></a></div>
                </div>
                <div className="cl">&nbsp;</div>

            </div>
            <div id="bottom">
                <div className="bg-top">
                    <div className="bg-bottom">
                        <div className="box">
                            <h3 className="star"><span>POPULAR POSTS</span></h3>
                            <div className="popular-posts">
                                <ul>
                                    <li>
                                        <div className="image"><a href="#"><img src="images/popular-1.jpg" alt=""/></a>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">The blessing of the LORD</a></h5>
                                            <p>The blessing of the LORD, it maketh rich, and toil addeth nothing thereto. </p>
                                        </div>
                                        <div className="cl">&nbsp;</div>
                                    </li>
                                    <li>
                                        <div className="image"><a href="#"><img src="images/popular-2.jpg" alt=""/></a>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">Happiness is the Best</a></h5>
                                            <p>Better is a handful of quietness, than both the hands full of labour and striving after wind. </p>
                                        </div>
                                        <div className="cl">&nbsp;</div>
                                    </li>
                                    <li>
                                        <div className="image"><a href="#"><img src="images/popular-3.jpg" alt=""/></a>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">Nunc pellentesque pellentesque laoreet</a></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
                                                lorem lectus, ut lacinia turpis. Nunc pellentesque pellentesque
                                                laoreet. Lorem ipsum dolor sit amet, consectetur </p>
                                        </div>
                                        <div className="cl">&nbsp;</div>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="see-all">see all popular posts</a>
                            <div className="cl">&nbsp;</div>
                        </div>
                        <div className="box last">
                            <h3 className="bubble"><span>LATEST COMMENTS</span></h3>
                            <div className="latest-comments">
                                <ul>
                                    <li>
                                        <h6>Jun 24.08.09 by <a href="#">Admin</a> on <a href="#">PostName</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lorem
                                            lectus, ut lacinia turpis. Nunc pellentesque pellentesque laoreet. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </li>
                                    <li>
                                        <h6>Jun 24.08.09 by <a href="#">Admin</a> on <a href="#">PostName</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lorem
                                            lectus, ut lacinia turpis. Nunc pellentesque pellentesque laoreet. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </li>
                                    <li>
                                        <h6>Jun 24.08.09 by <a href="#">Admin</a> on <a href="#">PostName</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lorem
                                            lectus, ut lacinia turpis. Nunc pellentesque pellentesque laoreet. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </li>
                                    <li>
                                        <h6>Jun 24.08.09 by <a href="#">Admin</a> on <a href="#">PostName</a></h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lorem
                                            lectus, ut lacinia turpis. Nunc pellentesque pellentesque laoreet. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cl">&nbsp;</div>
                    </div>
                </div>
            </div>


        </main>
    )
}