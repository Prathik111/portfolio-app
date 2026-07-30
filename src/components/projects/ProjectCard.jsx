function ProjectCard({ project }) {

    return (

        <div

            className={
                project.featured
                    ? "project-card featured"
                    : "project-card"
            }

        >

            <div className="project-image">

                <img

                    src={project.image}

                    alt={project.title}

                />

            </div>

            <div className="project-content">

                <h3>

                    {project.title}

                </h3>

                <p>

                    {project.description}

                </p>

                <div className="tech-stack">

                    {

                        project.technologies.map(technology => (

                            <span

                                key={technology}

                            >

                                {technology}

                            </span>

                        ))

                    }

                </div>

                <div className="project-buttons">

                    <a

                        href={project.github}

                        className="btn btn-outline"

                    >

                        GitHub

                    </a>

                    <a

                        href={project.demo}

                        className="btn btn-primary"

                    >

                        Live Demo

                    </a>

                </div>

            </div>

        </div>

    );

}

export default ProjectCard;