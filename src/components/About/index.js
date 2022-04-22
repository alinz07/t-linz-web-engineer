import React from "react";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

function About() {
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
                <h2 id="about-title">About Me</h2>
            </Grid>
            <Grid item p={2}>
                <Avatar
                    src={require("../../assets/Profile Picture.PNG")}
                    alt="me, Tony Linz"
                    sx={{ width: 150, height: 150 }}
                />
            </Grid>
            <Grid item id="about-para" p={2}>
                Full-Stack Web Development Bootcamp graduate from UWM. Hoping to
                contribute to a company that cares about CSR and encourages me
                to leverage my problem-solving and leadership skills while
                exploring my passion for tech.
            </Grid>
        </Grid>
    );
}

export default About;
