import React from 'react'
import { EDUCATION } from '../../Utils/data'
import './Education.css'

function Education() {
    return (
        <section className="education-container" id='education' >
            <h5>Education</h5>
            <span><hr /></span>
            {EDUCATION.map((item)=>(
            <div className="education-content">
                <div className="education-left">
                    <h4>{item.title}</h4>
                </div>

                <div className="education-right">
                    <ul>
                        <li>{item.organization}</li>
                        <li className='date-field'>{item.date}</li>
                        <li>{item.field}</li>
                    </ul>
                </div>
            </div>
            ))}
            
        </section>
    )
}

export default Education
