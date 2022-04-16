import React from "react";

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
            <ul className="flex-row">
                {navOptions.map((navOption) => (
                    <li
                        className={`mx-1 ${
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
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
