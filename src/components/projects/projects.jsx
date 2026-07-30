import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {

    const projects = [

        {
            title: "PACE AI Agent",
            featured: true,

            description:
                "An autonomous AI operating layer capable of planning, reasoning, tool execution, memory management and workflow automation.",

            image: "/projects/pace.png",

            technologies: [
                "Python",
                "Ollama",
                "LangChain",
                "SearXNG",
                "React"
            ],

            github: "#",

            demo: "#"
        },

        {
            title: "Portfolio Website",

            description:
                "Modern React portfolio showcasing projects, skills and experience.",

            image: "/projects/portfolio.png",

            technologies: [
                "React",
                "CSS",
                "JavaScript"
            ],

            github: "#",

            demo: "#"
        },

        {
            title: "Spring Boot Authentication",

            description:
                "Authentication system with Spring Security, JWT and React frontend.",

            image: "/projects/auth.png",

            technologies: [
                "Java",
                "Spring Boot",
                "React",
                "MySQL"
            ],

            github: "#",

            demo: "#"
        },

        {
            title: "AI Chat Assistant",

            description:
                "Desktop AI assistant powered by Ollama with local language models.",

            image: "/projects/chat.png",

            technologies: [
                "Python",
                "Ollama",
                "PyTorch"
            ],

            github: "#",

            demo: "#"
        }

    ];

    const [selected, setSelected] = useState("All");

    const categories = [

        "All",
        "AI",
        "Web",
        "Java"

    ];

    const filtered = projects.filter(project => {

        if (selected === "All") return true;

        return project.technologies.includes(selected);

    });

    return (

        <section id="projects" className="projects">

            <div className="container">

                <h2 className="section-title">

                    Featured Projects

                </h2>

                <p className="section-subtitle">

                    Projects that demonstrate my experience in AI,
                    web development and backend engineering.

                </p>

                <div className="project-tabs">

                    {

                        categories.map(category => (

                            <button

                                key={category}

                                onClick={() => setSelected(category)}

                                className={
                                    selected === category
                                        ? "active-project"
                                        : ""
                                }

                            >

                                {category}

                            </button>

                        ))

                    }

                </div>

                <div className="projects-grid">

                    {

                        filtered.map(project => (

                            <ProjectCard

                                key={project.title}

                                project={project}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Projects;