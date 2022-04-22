import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import image from "../../assets/homepages/bookworm.png";

function Project() {
    const projects = [
        {
            name: "National Parks Info and Weather",
            tech: "HTML, CSS, Javascript, Jquery, Foundation by Zurb",
            src: `{require("../../assets/national-parks-screenshot.png")}`,
            alt: "National Parks homepage",
            repo: "https://github.com/p-fassbender/national-parks-info-and-weather",
            aitchref:
                "https://p-fassbender.github.io/national-parks-info-and-weather/",
        },
        {
            name: "Ton's Tech Blog",
            tech: "MVC paradigm, Handlebars.js, Sequelize (ORM), Express-Session, Node",
            src: `{require("../../assets/tons-tech-blog.png")}`,
            alt: "Ton's Tech Blog homepage",
            repo: "https://github.com/alinz07/mvc-techblog",
            aitchref: "https://tons-tech-blog.herokuapp.com/",
        },
        {
            name: "Bookworm Bookclub",
            tech: "MVC paradigm, Node, Express, RESTful API, Handlebars.js, MySQL, Sequelize ORM",
            src: `{require("../../assets/bookworm.png")}`,
            alt: "Bookworm homepage",
            repo: "https://github.com/Hmlessard/Bookworm",
            aitchref: "https://asgardians-bookworm.herokuapp.com/",
        },
        {
            name: "Weather Dashboard",
            tech: "Dynamic HTML and CSS, Bootstrap, Open Weather API (server-side API)",
            src: `{require("../../assets/weather-dash.png")}`,
            alt: "Weather Dashboard homepage",
            repo: "https://github.com/alinz07/challenge-6",
            aitchref: "https://alinz07.github.io/challenge-6/",
        },
        {
            name: "Photo portfolio",
            tech: "React.js, Jest",
            src: `{require("../../assets/photo-port.png")}`,
            alt: "Photo portfolio homepage",
            repo: "https://github.com/alinz07/photo-port",
            aitchref: "https://alinz07.github.io/photo-port/",
        },
        {
            name: "Budget Tracker",
            tech: "MongoDB/Atlas, Mongoose, IndexedDB, PWA",
            src: `{require("../../assets/budget-tracker.png")}`,
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
                            height="140"
                            image={image}
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <h2>{project.name}</h2>
                                </Grid>
                                <Grid item xs={12}>
                                    <a href={project.aitchref}>Deployed App</a>
                                </Grid>

                                <Grid item xs={12}>
                                    <a href={project.repo}>GitHub Repo</a>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
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
    );
}

export default Project;
