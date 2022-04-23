import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function Nav(props) {
    const {
        navOptions = [
            {
                name: "About me",
                arrow: <ArrowBackOutlinedIcon id="eyecon" />,
                miles: " 0.1 MI",
            },
            {
                name: "Portfolio",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
                miles: " 0.4 MI",
            },
            {
                name: "Contact",
                arrow: <ArrowUpwardOutlinedIcon id="eyecon" />,
                miles: " 1.3 MI",
            },
            {
                name: "Resume",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
                miles: " 1.7 MI",
            },
        ],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <nav>
            <Grid container justifyContent="center" spacing={{ xs: 2, md: 10 }}>
                {navOptions.map((navOption) => (
                    <Grid item key={navOption.name}>
                        <Button
                            variant="contained"
                            id={`${
                                currentNav.name === navOption.name &&
                                !contactSelected
                                    ? "navActive"
                                    : "navBtn"
                            }`}
                            startIcon={navOption.arrow}
                            key={navOption.name}
                            onClick={() => {
                                setCurrentNav(navOption);
                                if (navOption === "Contact") {
                                    setContactSelected(true);
                                } else {
                                    setContactSelected(false);
                                }
                            }}
                        >
                            {navOption.name}&nbsp;&nbsp;&nbsp;&nbsp;
                            {navOption.miles}
                        </Button>
                    </Grid>
                ))}
            </Grid>{" "}
        </nav>
    );
}

export default Nav;
