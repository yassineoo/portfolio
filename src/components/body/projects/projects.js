import React from 'react'
import projects from '../../data/projects.js';
import './projects.css'
import Project from './project/project.js';
import Sperater from  '../sperater.js'
const  Projects = () => {
    return (
        <div className='projectsMain'>
     
         <Sperater/>
            <label className='sectionTitle'>Projects</label>
            <div className='hi'>
            {projects.map((project) => (
                <Project  project={project} />
            ))}
            </div>
        </div>
    )
}
export default  Projects ;