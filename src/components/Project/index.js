import React from "react";
import { Grid, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LinkIcon from "@mui/icons-material/Link";

function Project() {
    const projects = [
        {
            name: "National Parks Info and Weather",
            tech: "HTML, CSS, Javascript, Jquery, Foundation by Zurb",
            imgName: "national-parks-screenshot.png",
            alt: "National Parks homepage",
            repo: "https://github.com/p-fassbender/national-parks-info-and-weather",
            aitchref:
                "https://p-fassbender.github.io/national-parks-info-and-weather/",
        },
        {
            name: "Ton's Tech Blog",
            tech: "MVC paradigm, Handlebars, Sequelize (ORM), Express-Session, Node",
            imgName: "tons-tech-blog.png",
            alt: "Ton's Tech Blog homepage",
            repo: "https://github.com/alinz07/mvc-techblog",
            aitchref: "https://tons-tech-blog.herokuapp.com/",
        },
        {
            name: "Bookworm Bookclub",
            tech: "MVC paradigm, Node, Express, RESTful API, Handlebars, MySQL, Sequelize ORM",
            imgName: "bookworm.png",
            alt: "Bookworm homepage",
            repo: "https://github.com/Hmlessard/Bookworm",
            aitchref: "https://asgardians-bookworm.herokuapp.com/",
        },
        {
            name: "Weather Dashboard",
            tech: "Dynamic HTML and CSS, Bootstrap, Open Weather API",
            imgName: "weather-dash.png",
            alt: "Weather Dashboard homepage",
            repo: "https://github.com/alinz07/challenge-6",
            aitchref: "https://alinz07.github.io/challenge-6/",
        },
        {
            name: "Photo portfolio",
            tech: "React, Jest",
            imgName: "photo-port.png",
            alt: "Photo portfolio homepage",
            repo: "https://github.com/alinz07/photo-port",
            aitchref: "https://alinz07.github.io/photo-port/",
        },
        {
            name: "Budget Tracker",
            tech: "MongoDB/Atlas, Mongoose, IndexedDB, PWA",
            imgName: "budget-tracker.png",
            alt: "Budget Tracker homepage",
            repo: "https://github.com/alinz07/budget-tracker-mod19",
            aitchref: "https://github.com/alinz07/budget-tracker-mod19/",
        },
    ];
    return (
        <Grid container>
            {projects.map((project) => (
                <Grid item xs={12} md={4} key={project.name}>
                    <Card width={400} id="react-card">
                        <CardMedia
                            component="img"
                            alt={project.alt}
                            height="200"
                            image={require(`../../assets/homepages/${project.imgName}`)}
                        />
                        <CardContent>
                            <Grid container alignItems="center">
                                <Grid
                                    fontSize="h4.fontSize"
                                    p={2}
                                    pb={1}
                                    item
                                    xs={12}
                                >
                                    {project.name}
                                </Grid>
                                <Grid p={2} pt={2} item xs={6}>
                                    <Tooltip title="Go to link">
                                        <a
                                            id="proj-link"
                                            href={project.aitchref}
                                        >
                                            <LinkIcon /> Deployed App
                                        </a>
                                    </Tooltip>
                                </Grid>

                                <Grid p={2} pt={2} item xs={6}>
                                    <Tooltip title="Go to link">
                                        <a id="proj-link" href={project.repo}>
                                            <LinkIcon /> GitHub Repo
                                        </a>
                                    </Tooltip>
                                </Grid>
                                <Grid
                                    mt={5}
                                    p={2}
                                    item
                                    xs={12}
                                    fontSize="h5.fontSize"
                                    id="port-tech-stack"
                                >
                                    Tech Stack
                                </Grid>
                                <Grid
                                    pt={1}
                                    item
                                    xs={12}
                                    fontSize="h6.fontSize"
                                >
                                    {project.tech}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Project;
