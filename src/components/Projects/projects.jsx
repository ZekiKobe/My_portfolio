import React,{useRef} from 'react'
import './projects.css'
import Slider from 'react-slick'
import {PROJECTS} from '../../Utils/data'
import ProjectCard from './ProjectCard/projectCard'

function Projects() {

    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
            breakpoint:769,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
        {
            breakpoint:1000,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
        ],
        
    };

    const slideRight = () =>{
        sliderRef.current.slickNext();
    }

    const slideLeft = () =>{
        sliderRef.current.slickPrev();
    }
    return (
        <section className="project-container" id='projects'>
        <h5>Projects</h5>
        <hr />

        <div className="project-content">
            <div className="arrow-right" onClick={slideRight} >
                <span className="material-symbols-outlined">&gt;</span>
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbol-outlined">&lt;</span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) =>(
                <ProjectCard key={item.title}
                iconUrl={item.icon}
                details={item}
                links={item}/>
            ))}
            </Slider>
        </div>
    </section>
    )
}

export default Projects
