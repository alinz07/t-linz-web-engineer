import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [navOptions] = useState([
        { name: "About me" },
        { name: "Portfolio" },
        { name: "Contact" },
        { name: "Resume" },
    ]);
    const [currentNav, setCurrentNav] = useState(navOptions[0]);

    return (
        <div>
            <Header
                navOptions={navOptions}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Header>
            {currentNav.name === "About me" && <About></About>}
            {currentNav.name === "Portfolio" && <Project></Project>}
            {currentNav.name === "Contact" && <Contact></Contact>}
            {currentNav.name === "Resume" && <p>resume</p>}
            <Footer></Footer>
        </div>
    );
}

export default App;
