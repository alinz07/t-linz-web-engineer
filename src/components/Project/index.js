import React from "react";
import { Grid, Tooltip, Card, CardMedia, CardContent } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

function Project() {
    const projects = [
        {
            name: "Propagatorz",
            tech: "React, GraphQL, Node, Express, MongoDB, Mongoose, MUI ReactComponent Library, Cloudinary API, bcrypt",
            imgName: "propagatorz.png",
            alt: "Propagatorz homepage",
            repo: "https://github.com/alinz07/Propagatorz",
            aitchref: "https://propagatorz-plant-help.herokuapp.com/",
            desc: "A social media solution for users to connect with other plant enthusiasts for all their plant questions or to show off their plant babies.",
        },
        {
            name: "Photo portfolio",
            tech: "React, Jest",
            imgName: "photo-port.png",
            alt: "Photo portfolio homepage",
            repo: "https://github.com/alinz07/photo-port",
            aitchref: "https://alinz07.github.io/photo-port/",
            desc: "A mock Photographer's portfolio leveraging React and a suite of Jest tests for the components",
        },
        {
            name: "Budget Tracker",
            tech: "MongoDB/Atlas, Mongoose, IndexedDB, PWA",
            imgName: "budget-tracker.png",
            alt: "Budget Tracker homepage",
            repo: "https://github.com/alinz07/budget-tracker-mod19",
            aitchref: "https://budget-tracker-mod19-tlinz.herokuapp.com/",
            desc: "A Progressive Web Application that uses a MongoDB database, Mongoose for ORM and IndexedDB for data persistence.",
        },
        {
            name: "Bookworm Bookclub",
            tech: "MVC paradigm, Node, Express, RESTful API, Handlebars, MySQL, Sequelize ORM",
            imgName: "bookworm.png",
            alt: "Bookworm homepage",
            repo: "https://github.com/Hmlessard/Bookworm",
            aitchref: "https://asgardians-bookworm.herokuapp.com/",
            desc: "A bookclub web application that allows users to discuss their favorite reads, add new books to their list of books to read and delete them when done. This application's codebase was built using the MVC paradigm, using MySQL and the Sequelize ORM for the database, Handlebars.js for the views, and Express and Express Session with cookies for the RESTful APIs with authentication. Login username: Bilbo  Password: Precious",
        },
        {
            name: "National Parks Info and Weather",
            tech: "HTML, CSS, Javascript, Jquery, Foundation by Zurb",
            imgName: "national-parks-screenshot.png",
            alt: "National Parks homepage",
            repo: "https://github.com/p-fassbender/national-parks-info-and-weather",
            aitchref:
                "https://p-fassbender.github.io/national-parks-info-and-weather/",
            desc: "An application for hikers to view national parks in their state and a 5 day weather forecast to help them plan an adventure. My contributions include front and back-end development with a focus on dynamic HTML and parsing API JSON data.",
        },
        {
            name: "Ton's Tech Blog",
            tech: "MVC paradigm, Handlebars, Sequelize (ORM), Express-Session, Node",
            imgName: "tons-tech-blog.png",
            alt: "Ton's Tech Blog homepage",
            repo: "https://github.com/alinz07/mvc-techblog",
            aitchref: "https://tons-tech-blog.herokuapp.com/",
            desc: "A social media platform that follows the MVC paradigm using SQL and Sequelize, Handlebars.js and Express-Session with cookies for user authentication. Login username: Bilbo  Password: Precious",
        },
    ];
    return (
        <Grid container display="flex" wrap="wrap">
            {projects.map((project) => (
                <Grid item xs={12} md={6} xl={4} key={project.name}>
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
                                            target="_blank"
                                            rel="noreferrer"
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
                                <Grid
                                    mt={5}
                                    p={2}
                                    item
                                    xs={12}
                                    fontSize="h5.fontSize"
                                    id="description"
                                >
                                    Motivation and Contribution
                                </Grid>
                                <Grid
                                    pt={1}
                                    item
                                    xs={12}
                                    fontSize="h6.fontSize"
                                >
                                    {project.desc}
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
