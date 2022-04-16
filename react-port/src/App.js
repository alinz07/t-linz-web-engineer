import React, { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

function App() {
    return (
        <div>
            <Header />
            <Project />
            <ContactForm />
        </div>
    );
}

export default App;
