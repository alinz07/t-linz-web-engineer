import React from "react";

function Resume() {
    const techStack = [
        "AJAX",
        "Benchmark.js",
        "Bootstrap",
        "client and server-side APIs",
        "CSS",
        "Express.js",
        "Foundation, Git",
        "Handlebars.js",
        "Heroku",
        "HTML",
        "javascript",
        "jQuery",
        "MongoDB Express.js React Node (MERN)",
        "Mongoose",
        "Model-View-Controller (MVC) paradigm",
        "NoSQL",
        "Object-Oriented Programming (OOP)",
        "Object Relational Mapping (ORM)",
        "Progressive Working Applications (PWA)",
        "Python",
        "Sequelize",
        "mySQL",
    ];

    return (
        <div>
            <a href="/">Anthony Linz Resume.pdf</a>
            <h2>Tech Proficiencies</h2>
            <ul>
                {techStack.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Resume;
