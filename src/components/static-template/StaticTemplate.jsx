import React from "react";
import "./StaticTemplateStyle.css";

/*
Solution for images

https://stackoverflow.com/a/66355497/9727918

 */
export function StaticTemplate() {

    return (
        <div>
           {/*START PAGE SOURCE*/}
            <div id="shell">
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
                <div id="navigation">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#" className="active">ARTICLES</a></li>
                        <li><a href="#">PHOTOS</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    <div className="cl">&nbsp;</div>
                </div>
                <div id="main">
                    <div id="content">
                        <div className="box">
                            <h2><span>CATEGORY ONE</span></h2>
                            <a href="#" className="see-all">See all articles in this category</a>
                            <div className="cl">&nbsp;</div>
                            <div className="posts">
                                <div className="post">
                                    <div className="image"><a href="#"><img src={"images/post-1.jpg"}alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-2.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                                <div className="post">
                                    <div className="image"><a href="#"><img src="images/post-3.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                                        <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et
                                            odio bibendum non dictum nisi posuere. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-4.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="image"><a href="#"><img src={"images/post-1.jpg"}alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-2.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="image"><a href="#"><img src={"images/post-1.jpg"}alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-2.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div className="box">
                            <h2><span>CATEGORY TWO</span></h2>
                            <a href="#" className="see-all">See all articles in this category</a>
                            <div className="cl">&nbsp;</div>
                            <div className="posts">
                                <div className="post">
                                    <div className="image"><a href="#"><img src="images/post-5.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-6.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                                <div className="post">
                                    <div className="image"><a href="#"><img src="images/post-1.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                                        <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et
                                            odio bibendum non dictum nisi posuere. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-1.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div className="box last">
                            <h2><span>CATEGORY THREE</span></h2>
                            <a href="#" className="see-all">See all articles in this category</a>
                            <div className="cl">&nbsp;</div>
                            <div className="posts">
                                <div className="post">
                                    <div className="image"><a href="#"><img src="images/post-7.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        </h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-8.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                                <div className="post">
                                    <div className="image"><a href="#"><img src="images/post-9.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                                        <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et
                                            odio bibendum non dictum nisi posuere. </p>
                                    </div>
                                </div>
                                <div className="post last">
                                    <div className="image"><a href="#"><img src="images/post-10.jpg" alt=""/></a></div>
                                    <div className="data">
                                        <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                                        <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi
                                            bibendum luctus. </p>
                                    </div>
                                </div>
                                <div className="cl">&nbsp;</div>
                            </div>
                        </div>
                        <div className="cl">&nbsp;</div>
                    </div>
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
                                                <h5><a href="#">Cras nec lorem lectus</a></h5>
                                                <p>Lorem ipsum
                                                    Cras ac ultrices ipsum.dolor sit amet, consectetur adipiscing elit. Cras nec
                                                    lorem lectus, ut lacinia turpis. Nunc pellentesque pellentesque
                                                    laoreet. Lorem ipsum dolor sit amet, consectetur </p>
                                            </div>
                                            <div className="cl">&nbsp;</div>
                                        </li>
                                        <li>
                                            <div className="image"><a href="#"><img src="images/popular-2.jpg" alt=""/></a>
                                            </div>
                                            <div className="data">
                                                <h5><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
                                                    lorem lectus, ut lacinia turpis. Nunc pellentesque pellentesque
                                                    laoreet. Lorem ipsum dolor sit amet, consectetur </p>
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
                <div id="footer">
                    <p className="lf">Copyright &copy; 2010 <a href="#">SiteName</a> - All Rights Reserved</p>
                    <p className="rf">Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a></p>
                    <div style={{clear: "both"}}></div>
                </div>
            </div>
      {/*END PAGE SOURCE */}
        </div>
    );
}