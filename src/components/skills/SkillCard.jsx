import { useEffect, useState } from "react";

function SkillCard({ skill }) {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {

            setWidth(skill.level);

        }, 150);

        return () => clearTimeout(timer);

    }, [skill]);

    return (

        <div className="skill-card card">

            <div className="skill-header">

                <h3>

                    {skill.name}

                </h3>

                <span>

                    {skill.level}%

                </span>

            </div>

            <div className="progress-bar">

                <div

                    className="progress"

                    style={{

                        width: `${width}%`

                    }}

                ></div>

            </div>

        </div>

    );

}

export default SkillCard;