import React from "react";
import { Grid } from "@mui/material";

function Footer() {
    return (
        <Grid
            container
            alignItems="center"
            id="contact-info"
            justifyContent="center"
            mt={10}
        >
            <Grid item xs={12} md={2} p={2}>
                <h2 id="contact-title">Say hello</h2>
            </Grid>

            <Grid item xs={12} md={2} p={2}>
                262.305.4411
            </Grid>
            <Grid item xs={12} md={2} p={2}>
                <a
                    className="contact-anchor"
                    href="https://www.linkedin.com/in/tony-l-b19b0119/"
                >
                    Tony Linz on LinkedIn
                </a>
            </Grid>
            <Grid item xs={12} md={2} p={2}>
                <a className="contact-anchor" href="https://github.com/alinz07">
                    Tony Linz Github
                </a>
            </Grid>
            <Grid item xs={12} md={2} p={2}>
                <a
                    className="contact-anchor"
                    href="https://www.instagram.com/tonylinz07/"
                >
                    Tony Linz on Instagram
                </a>
            </Grid>
        </Grid>
    );
}

export default Footer;
