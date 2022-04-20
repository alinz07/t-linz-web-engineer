import React from "react";

function Project() {
    return (
        // <ul className="flex-row">
        //         {navOptions.map((navOption) => (
        //             <li
        //                 className={`mx-1 ${
        //                     currentNav.name === navOption.name &&
        //                     !contactSelected &&
        //                     "navActive"
        //                 }`}
        //                 key={navOption.name}
        //             >
        //                 <span
        //                     onClick={() => {
        //                         setCurrentNav(navOption);
        //                         if (navOption === "Contact") {
        //                             setContactSelected(true);
        //                         } else {
        //                             setContactSelected(false);
        //                         }
        //                     }}
        //                 >
        //                     {navOption.name}
        //                 </span>
        //             </li>
        //         ))}
        //     </ul>
        <section className="body-section" id="portfolio">
            <h2 className="section-title">portfolio</h2>

            <div className="project-tiles">
                <section id="main-tile">
                    <a href="https://p-fassbender.github.io/national-parks-info-and-weather/">
                        <img
                            className="project-img"
                            src={require("../../assets/national-parks-screenshot.png")}
                            alt="national parks web app screenshot"
                            href="#"
                        />
                    </a>
                    <nav>
                        <h3 id="main-tile-h3">
                            National Parks Info and Weather
                        </h3>

                        <h4 id="main-tile-h4">
                            HTML, CSS, Javascript, Jquery, Foundation by Zurb,
                        </h4>
                    </nav>
                </section>

                <section className="tile">
                    <div className="tile-div">
                        <div className="left-tiles">
                            <a href="https://tons-tech-blog.herokuapp.com/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/tons-tech-blog.png")}
                                    alt="Ton's Tech Blog homepage"
                                />
                            </a>
                            <nav>
                                <h3>Ton's Tech Blog</h3>
                                <h4>
                                    MVC paradigm, Handlebars.js, Sequelize
                                    (ORM), Express-session, Node
                                </h4>
                            </nav>
                        </div>

                        <div className="right-tiles">
                            <a href="https://asgardians-bookworm.herokuapp.com/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/bookworm.png")}
                                    alt="wood background, will link to project when project is finished"
                                />
                            </a>
                            <nav>
                                <h3>Bookworm</h3>
                                <h4>Model View Controller-style bookclub</h4>
                            </nav>
                        </div>
                    </div>

                    <div className="tile-div">
                        <div className="left-tiles">
                            <a href="https://alinz07.github.io/challenge-6/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/weather-dash.png")}
                                    alt="Weather Dashboard homepage"
                                />
                            </a>
                            <nav>
                                <h3>Weather Dashboard</h3>
                                <h4>
                                    Dynamic HTML and CSS, Bootstrap, Open
                                    Weather API (server-side API)
                                </h4>
                            </nav>
                        </div>

                        <div className="right-tiles">
                            <a href="https://alinz07.github.io/photo-port/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/photo-port.png")}
                                    alt="wood background, will link to project when project is finished"
                                />
                            </a>
                            <nav>
                                <h3>Photo portfolio</h3>
                                <h4>React.js, SPA, Jest</h4>
                            </nav>
                        </div>
                        <div className="right-tiles">
                            <a href="https://github.com/alinz07/budget-tracker-mod19/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/budget-tracker.png")}
                                    alt="Budget Tracker homepage"
                                />
                            </a>
                            <nav>
                                <h3>Budget Tracker</h3>
                                <h4>MongoDB/Atlas, Mongoose, IndexedDB</h4>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Project;
