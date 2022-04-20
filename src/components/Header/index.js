import React from "react";
import Nav from "../Nav";
import Grid from "@mui/material/Grid";

function Header(props) {
    const {
        navOptions = [],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <h1 id="my-name">Tony Linz</h1>
            </Grid>
            <Grid item xs={12}>
                <h2 id="subtitle">Full Stack Web Engineer</h2>
            </Grid>
            <Grid item xs={12}>
                <Nav
                    navOptions={navOptions}
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
