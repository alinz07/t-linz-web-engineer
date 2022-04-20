import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

function Nav(props) {
    const {
        navOptions = [],
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
                        id="navBtn"
                        startIcon={<DeleteIcon />}
                        className={`${
                            currentNav.name === navOption.name &&
                            !contactSelected &&
                            "navActive"
                        }`}
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
