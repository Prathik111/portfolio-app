import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        function updateProgress() {

            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (scrollHeight <= 0) {

                setProgress(0);

                return;

            }

            const percentage =
                (scrollTop / scrollHeight) * 100;

            setProgress(percentage);

        }

        updateProgress();

        window.addEventListener("scroll", updateProgress);
        window.addEventListener("resize", updateProgress);

        return () => {

            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);

        };

    }, []);

    return (

        <div
            className="progress-bar-top"
            style={{
                width: `${progress}%`
            }}
        ></div>

    );

}

export default ScrollProgress;