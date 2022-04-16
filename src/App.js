import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
// import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

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
            <Header></Header>
            <Nav
                navOptions={navOptions}
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <Project></Project>
            <ContactForm></ContactForm>
        </div>
    );
}

export default App;
