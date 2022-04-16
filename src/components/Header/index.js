import React from "react";
import Nav from "../Nav";

function Header(props) {
    const {
        navOptions = [],
        setCurrentNav,
        currentNav,
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <header>
            <h1>
                <a>Anthony Linz</a>
            </h1>
            <Nav
                navOptions={navOptions}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <section className="hero">
                {/* <img
                    src={require("../../assets/hero.jpg")}
                    alt="office with plants"
                    key="hero-img"
                /> */}
                <p>Aspiring Software Engineer</p>
            </section>
        </header>
    );
}

export default Header;
