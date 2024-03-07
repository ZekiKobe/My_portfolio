import React, { useRef } from 'react'
import './workExperience.css'
import {WORK_EXPERIENCE} from '../../Utils/data'
import WorkExperienceCard from './WorkExperienceCard/workExperienceCard'
import Slider from 'react-slick'
import "@fontsource-variable/material-symbols-outlined";

function WorkExperience() {

const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow:2,
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
        ],
    };

    const slideRight = () =>{
        sliderRef.current.slickNext();
    }

    const slideLeft = () =>{
        sliderRef.current.slickPrev();
    }


    return (
        <section className="experience-container" id='experience' >
            <h5>Work Experience</h5>
            <hr />

            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight} >
                    <span className="material-symbols-outlined">&gt;</span>
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbol-outlined">&lt;</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) =>(
                    <WorkExperienceCard key={item.title}
                    details={item}/>
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience
