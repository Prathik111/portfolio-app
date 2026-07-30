import { useState } from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

function Skills() {

    const skills = {

        Frontend: [

            {
                name: "HTML5",
                level: 95
            },

            {
                name: "CSS3",
                level: 92
            },

            {
                name: "JavaScript",
                level: 90
            },

            {
                name: "React",
                level: 90
            }

        ],

        Backend: [

            {
                name: "Java",
                level: 92
            },

            {
                name: "Spring Boot",
                level: 88
            },

            {
                name: "Node.js",
                level: 75
            },

            {
                name: "REST APIs",
                level: 90
            }

        ],

        AI: [

            {
                name: "Python",
                level: 95
            },

            {
                name: "PyTorch",
                level: 82
            },

            {
                name: "LangChain",
                level: 84
            },

            {
                name: "Ollama",
                level: 90
            },

            {
                name: "ComfyUI",
                level: 88
            }

        ],

        Database: [

            {
                name: "MySQL",
                level: 90
            },

            {
                name: "MongoDB",
                level: 78
            }

        ],

        Tools: [

            {
                name: "Git",
                level: 90
            },

            {
                name: "Linux",
                level: 88
            },

            {
                name: "Docker",
                level: 70
            },

            {
                name: "VS Code",
                level: 95
            }

        ]

    };

    const categories = Object.keys(skills);

    const [selectedCategory, setSelectedCategory] = useState("Frontend");

    return (

        <section
            id="skills"
            className="skills"
        >

            <div className="container">

                <h2 className="section-title">

                    Skills

                </h2>

                <p className="section-subtitle">

                    A collection of technologies I use to build modern
                    web applications, AI solutions, and scalable software.

                </p>

                <div className="skill-tabs">

                    {

                        categories.map((category) => (

                            <button

                                key={category}

                                className={
                                    selectedCategory === category
                                        ? "active-tab"
                                        : ""
                                }

                                onClick={() => {

                                    setSelectedCategory(category);

                                }}

                            >

                                {category}

                            </button>

                        ))

                    }

                </div>

                <div className="skills-grid">

                    {

                        skills[selectedCategory].map((skill) => (

                            <SkillCard

                                key={skill.name}

                                skill={skill}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Skills;