import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <h1>
                <a>Anthony Linz</a>
            </h1>
            <Nav />
            <section className="hero">
                <img
                    src={require("../../assets/Profile Picture.PNG")}
                    alt="me, Tony Linz"
                    key="hero"
                />
                <p>Aspiring Software Engineer</p>
            </section>
            <section className="body-section" id="about-me">
                <h2 className="section-title">About Me</h2>

                <div>
                    <p>
                        Hello! My name is Tony and I'm interested in pursuing a
                        career in Software Engineering or Web Development. From
                        2012 - 2021 I managed a Compliance Audit for a financial
                        services company in Seattle, WA, while learning coding
                        (Python) as a side hobby. I'm currently back in my home
                        state of WI, attending UW-Milwuakee Extended Campus'
                        Full Stack Coding Bootcamp, in order to switch careers
                        and put my coding acumen to use. Feel free to browse my
                        portfolio at your leisure and contact me at the phone
                        number or email provided at the bottom of this page.
                    </p>

                    <p>
                        A little more about me: I grew up in Wisconsin and
                        attended the University of Wisconsin - Madison, earning
                        a bachelor's in Spanish Language and Hispanic Culture
                        while taking the courses for the business certificate. I
                        found a great job opportunity in Seattle where I had
                        many best friends follow and spent the next 9 years
                        hiking the mountains and foothills of the PNW, making
                        friends, playing board games and learning to cope with
                        rain. While pursuing an MBA, I learned to code with
                        Python as a hobby and realized duirng the pandemic that
                        I had a passion for coding and tech and that the tech
                        job market would be much more stable. In sept 2021 I
                        decided to take a year back in Wisconsin to be near my
                        family and go back to school. I'm taking this year to
                        explore tech, gain the skills I need for a web
                        development and software engineering role, and spending
                        holidays and game nights with my family. After
                        graduation from the coding bootcamp 05.12.22 I hope to
                        find a remote position with a responsible and
                        sustainable company, that allows me to split my time
                        between Seattle and Wisconson while continually adding
                        to my skillset.
                    </p>
                </div>
            </section>
        </header>
    );
}

export default Header;
