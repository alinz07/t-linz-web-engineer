import { Grid } from "@mui/material";
import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { setCurrentNav, currentNav, contactSelected, setContactSelected } =
        props;

    return (
        <Grid
            container
            direction="column"
            justify-content="center"
            alignItems="center"
            id="header"
        >
            <Grid item xs={12} id="hero">
                <h1 id="my-name">Tony Linz</h1>
                <h2 id="subtitle">Full Stack Web Engineer</h2>
            </Grid>
            <Grid item xs={12}>
                <Nav
                    setCurrentNav={setCurrentNav}
                    currentNav={currentNav}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                ></Nav>
            </Grid>
        </Grid>
    );
}

export default Header;
