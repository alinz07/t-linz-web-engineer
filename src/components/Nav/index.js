import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

function Nav(props) {
    const {
        navOptions = [
            {
                name: "About me",
                arrow: <ArrowBackOutlinedIcon id="eyecon" />,
            },
            {
                name: "Portfolio",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
            },
            {
                name: "Contact",
                arrow: <ArrowUpwardOutlinedIcon id="eyecon" />,
            },
            {
                name: "Resume",
                arrow: <ArrowForwardOutlinedIcon id="eyecon" />,
            },
        ],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <nav>
            <Stack direction="column">
                {navOptions.map((navOption) => (
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
                    >
                        <span
                            onClick={() => {
                                setCurrentNav(navOption);
                                if (navOption === "Contact") {
                                    setContactSelected(true);
                                } else {
                                    setContactSelected(false);
                                }
                            }}
                        >
                            {navOption.name}
                        </span>
                    </Button>
                ))}
            </Stack>
        </nav>
    );
}

export default Nav;
