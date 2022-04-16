import React from "react";

function Nav() {
    return (
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about-me">About Me</a>
            </li>

            <li>
                <a href="#portfolio">Portfolio</a>
            </li>

            <li>
                <a href="#contact-info">Contact Info</a>
            </li>

            <li>
                <a href="resume.html">Resume</a>
            </li>
        </ul>
    );
}

export default Nav;
