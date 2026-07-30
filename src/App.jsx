import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footers/footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {

    return (

        <>

            <Navbar />

            <main>

                <Hero />

                <About />

                <Skills />

                <Projects />

                <Contact />

            </main>

            <backToTop />

            <Footer />

        </>

    );

}

export default App;