import React from 'react'
import './projectCard.css'

function ProjectCard({details,iconUrl,links}) {
    return (
        <div className="project-card">
            <h6>{details.title}</h6>

            <div className="project-image-container"><img className='project-images' src={iconUrl} alt="" /></div>

            <ul>
                {details.resposibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <a href={links.link} style={{color:'white'}}>View project in Github</a>
        </div>
    )
}

export default ProjectCard
