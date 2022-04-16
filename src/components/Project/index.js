import React from "react";

function Project() {
    return (
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
                            <a href="https://alinz07.github.io/run-buddy/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/hero-bg.jpg")}
                                    alt="Linked Run Buddy home page hero image of person tying shoe"
                                />
                            </a>
                            <nav>
                                <h3>Run Buddy</h3>
                                <h4>HTML, Advanced CSS</h4>
                            </nav>
                        </div>

                        <div className="right-tiles">
                            <a href="https://asgardians-bookworm.herokuapp.com/">
                                <img
                                    className="project-img"
                                    src={require("../../assets/bookworm.png")}
                                    alt="wood background, will link to project when project is finished"
                                    href="#"
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
                            <a href="#">
                                <img
                                    className="project-img"
                                    src={require("../../assets/wood.jpg")}
                                    alt="wood background, will link to project when project is finished"
                                    href="#"
                                />
                            </a>
                            <nav>
                                <h3>Project 4</h3>
                                <h4>Coming Soon!</h4>
                            </nav>
                        </div>

                        <div className="right-tiles">
                            <a href="#">
                                <img
                                    className="project-img"
                                    src={require("../../assets/wood.jpg")}
                                    alt="wood background, will link to project when project is finished"
                                    href="#"
                                />
                            </a>
                            <nav>
                                <h3>project 5</h3>
                                <h4>Coming Soon!</h4>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Project;
