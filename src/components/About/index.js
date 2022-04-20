import React from "react";

function About() {
    return (
        <section className="body-section" id="about-me">
            <h2 className="section-title">About Me</h2>

            <img
                src={require("../../assets/Profile Picture.PNG")}
                alt="me, Tony Linz"
                key="profile-picture"
            />

            <div>
                <p>
                    Full-Stack Web Development Bootcamp graduate from UWM.
                    Hoping to contribute to a company that cares about CSR and
                    encourages me to leverage my problem-solving and leadership
                    skills while exploring my passion for tech.
                </p>
            </div>
        </section>
    );
}

export default About;
