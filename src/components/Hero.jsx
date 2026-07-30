import { useState, useEffect } from "react";
import "./Hero.css";


function Hero() {

    const titles = [

        "Full Stack Developer",
        "AI Engineer",
        "Machine Learning Enthusiast",
        "React Developer"

    ];

    const [index,setIndex]=useState(0);
    const [text,setText]=useState("");
    const [deleting,setDeleting]=useState(false);

    useEffect(()=>{

        const current=titles[index];

        const timeout=setTimeout(()=>{

            if(!deleting){

                setText(current.substring(0,text.length+1));

                if(text===current){

                    setTimeout(()=>{

                        setDeleting(true);

                    },1200);

                }

            }

            else{

                setText(current.substring(0,text.length-1));

                if(text===""){

                    setDeleting(false);

                    setIndex((index+1)%titles.length);

                }

            }

        },deleting?50:90);

        return()=>clearTimeout(timeout);

    },[text,deleting,index]);

    return(

        <section
            id="home"
            className="hero"
        >

            <div className="hero-background">

                <div className="blob one"></div>

                <div className="blob two"></div>

                <div className="blob three"></div>

            </div>

            <div className="hero-content">

                <div className="hero-left">

                    <p className="hero-tag">

                        👋 Hello There

                    </p>

                    <h1>

                        Hi, I'm

                        <span>

                            Prathik 

                        </span>

                    </h1>

                    <h2>

                        {text}

                        <span className="cursor">|</span>

                    </h2>

                    <p className="hero-description">

                        I build intelligent software, modern web
                        applications and AI powered solutions that
                        solve real-world problems.

                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="btn btn-primary"
                        >

                            View Projects

                        </a>

                        <a
                            href="/resume.pdf"
                            className="btn btn-outline"
                            target="_blank"
                        >

                            Download Resume

                        </a>

                    </div>

                </div>

                <div className="hero-right">



                </div>

            </div>

            <a
                href="#about"
                className="scroll-down"
            >

                <span></span>

            </a>

        </section>

    );

}

export default Hero;