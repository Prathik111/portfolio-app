import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop(){

    const [show,setShow]=useState(false);

    useEffect(()=>{

        function handleScroll(){

            setShow(window.scrollY>500);

        }

        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    return(

        <button

            className={
                show
                ?"top-button show"
                :"top-button"
            }

            onClick={()=>{

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            }}

        >

            ↑

        </button>

    );

}

export default BackToTop;