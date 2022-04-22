import { Tooltip } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import pdf from "../../assets/Tony-Linz-Resume.pdf";

function Resume() {
    const techStack = [
        "AJAX",
        "Benchmark.js",
        "Bootstrap",
        "Client and server-side APIs",
        "CSS",
        "Express.js",
        "Foundation, Git",
        "Handlebars.js",
        "Heroku",
        "HTML",
        "Javascript",
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
        <Grid
            container
            direction="column"
            justify-content="center"
            alignItems="center"
            id="react-card"
            wrap="wrap"
        >
            <Grid item p={2} fontSize={25}>
                <Tooltip title="download resume pdf">
                    <a id="resume" href={pdf} download>
                        Tony Linz Resume.pdf
                    </a>
                </Tooltip>
            </Grid>
            <Grid item p={2} fontSize={25}>
                <h2 id="tech-prof">Tech Proficiencies</h2>
            </Grid>
            <ul>
                {techStack.map((skill) => (
                    <li id="skill" key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default Resume;
