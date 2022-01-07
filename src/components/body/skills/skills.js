import React from 'react'
import Sperater from '../sperater'
import skills from '../../data/skills.js';
import './skills.css'
const  Skills = () => {

    return (
        <div className = 'skills'>
             <Sperater/>
             <label className='sectionTitle'>Skills</label>
              {skills.map((type) => (
               <div className= 'skillsSection' >
                   <label className='type'> {type.type}</label>
                   <div className='skillsList'>
                    {type.libs.map((skill) => (
                        <div className='skillCard'> 
                        <div className='skillIcon' >{skill.icon} </div>
                        <label className='skilleName'>{skill.name}</label>
                         </div>
                    ))}
                    </div>
               </div>
              ) )}
        </div>
    )
}
export default  Skills