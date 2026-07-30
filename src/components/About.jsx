import { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {

    const sectionRef = useRef(null);

    const [visible, setVisible] = useState(false);

    const [counts, setCounts] = useState({
        projects: 0,
        technologies: 0,
        certifications: 0
    });

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setVisible(true);

                }

            },

            {

                threshold: 0.3

            }

        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();

    }, []);

    useEffect(() => {

        if (!visible) return;

        const target = {

            projects: 15,
            technologies: 12,
            certifications: 5

        };

        const interval = setInterval(() => {

            setCounts((previous) => ({

                projects:
                    previous.projects < target.projects
                        ? previous.projects + 1
                        : target.projects,

                technologies:
                    previous.technologies < target.technologies
                        ? previous.technologies + 1
                        : target.technologies,

                certifications:
                    previous.certifications < target.certifications
                        ? previous.certifications + 1
                        : target.certifications

            }));

        }, 70);

        return () => clearInterval(interval);

    }, [visible]);

    return (

        <section

            id="about"

            className="about"

            ref={sectionRef}

        >

            <div className="container">

                <h2 className="section-title">

                    About Me

                </h2>

                <p className="section-subtitle">

                    I enjoy building software that combines clean engineering
                    practices with artificial intelligence to solve practical problems.

                </p>

                <div className={visible ? "about-top show" : "about-top"}>

                    <div className="about-card card">

                        <h3>

                            👋 Who Am I?

                        </h3>

                        <p>

                            I'm a passionate software developer focused on
                            Full Stack Development, Artificial Intelligence,
                            Machine Learning and scalable backend systems.

                            I enjoy learning new technologies and building
                            projects that challenge me to grow as an engineer.

                        </p>

                    </div>

                    <div className="about-card card">

                        <h3>

                            🎯 Current Focus

                        </h3>

                        <ul>

                            <li>Full Stack Development</li>

                            <li>AI Agents & Local LLMs</li>

                            <li>System Design</li>

                            <li>Spring Boot & React</li>

                            <li>Machine Learning</li>

                        </ul>

                    </div>

                </div>

                <div className={visible ? "stats show" : "stats"}>

                    <div className="stat card">

                        <h1>

                            {counts.projects}+

                        </h1>

                        <span>

                            Projects

                        </span>

                    </div>

                    <div className="stat card">

                        <h1>

                            {counts.technologies}+

                        </h1>

                        <span>

                            Technologies

                        </span>

                    </div>

                    <div className="stat card">

                        <h1>

                            {counts.certifications}+

                        </h1>

                        <span>

                            Certifications

                        </span>

                    </div>

                    <div className="stat card">

                        <h1>

                            ∞

                        </h1>

                        <span>

                            Curiosity

                        </span>

                    </div>

                </div>

                <div className={visible ? "timeline show" : "timeline"}>

                    <h2>

                        My Journey

                    </h2>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="timeline-content card">

                            <h3>

                                Started Programming

                            </h3>

                            <p>

                                Learned Java, Python and web development while
                                exploring software engineering fundamentals.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="timeline-content card">

                            <h3>

                                AI & Machine Learning

                            </h3>

                            <p>

                                Worked with Local LLMs, Ollama, ComfyUI,
                                LangChain and open-source AI technologies.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="timeline-content card">

                            <h3>

                                Today

                            </h3>

                            <p>

                                Building full-stack applications while learning
                                cloud computing, DevOps and advanced AI systems.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;