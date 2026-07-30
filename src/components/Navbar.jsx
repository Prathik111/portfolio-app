import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact"
    ];

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

            let current = "home";

            sections.forEach((section) => {

                const element = document.getElementById(section);

                if (element) {

                    const top = element.offsetTop - 120;

                    if (window.scrollY >= top) {
                        current = section;
                    }

                }

            });

            setActive(current);

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollTo = (id) => {

        document.getElementById(id).scrollIntoView({

            behavior: "smooth"

        });

        setMenuOpen(false);

    };

    return (

        <header className={scrolled ? "navbar scrolled" : "navbar"}>

            <div className="logo">

                Valdora

            </div>

            <nav className={menuOpen ? "nav active" : "nav"}>

                {

                    sections.map((section) => (

                        <button

                            key={section}

                            onClick={() => scrollTo(section)}

                            className={active === section ? "active-link" : ""}

                        >

                            {section.charAt(0).toUpperCase() + section.slice(1)}

                        </button>

                    ))

                }

            </nav>

            <div

                className={menuOpen ? "hamburger open" : "hamburger"}

                onClick={() => setMenuOpen(!menuOpen)}

            >

                <span></span>
                <span></span>
                <span></span>

            </div>

        </header>

    );

}

export default Navbar;