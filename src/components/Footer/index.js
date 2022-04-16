import React from "react";
import Contact from "../Contact";

function Footer() {
    return (
        <footer>
            {/* save space for a tree animation/picture */}
            <section className="body-section" id="contact-info">
                <h2 className="section-title">Contact Info</h2>

                <div>
                    <a>262.305.4411</a>

                    <a href="mailto:tonyllinz@gmail.com">tonyllinz@gmail.com</a>

                    <a href="https://github.com/alinz07">Anthony Linz Github</a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
