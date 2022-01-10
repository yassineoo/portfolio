import React from 'react'
import Sperater from '../sperater'
import { motion } from "framer-motion"
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
                        <motion.div
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0}}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='skillCard'
                                >
                           
              
                        <div className='skillIcon' >{skill.icon} </div>
                        <label className='skilleName'>{skill.name}</label>
                        </motion.div>
                    ))}
                    </div>
               </div>
              ) )}
        </div>
    )
}
export default  Skills