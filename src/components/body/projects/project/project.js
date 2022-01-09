import React from 'react'
import './project.css';

export default function Project({project}) {
    return (
        <div className='prCard'>
     
        <div className='prInfo'>
         <label className='prTitel'>{project.title}</label>
           <div className='prLinks'>
          {project.demo && 
          <a href={project.demo} className='prlink' target='_blank'>
           <div className='linkButton'>
      
           <img src={require('../../../../assets/icons/demo.png')} className='prLinkImg'></img>
               demo
           </div>
          </a>}
          <a href={project.github} className='prlink' target='_blank'>
           <div className='linkButton'> 
           <i class="devicon-github-original colored"></i>GitHub
           </div>
          </a>
           </div>
         <div> {project.description}</div>
        <div  className='prTags'>
        {project.tags.map((tag) => (
            <label className='prTag' >{tag}</label>
        ))
        }
         </div>
         
        </div>
        <div className = 'imgCon'>
            <img className='prImg' src= {project.img }/>
        </div>
        </div>
    )
}
