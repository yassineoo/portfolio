import React from 'react'
import About from './about/about.js';
import Projects from './projects/projects.js';
import Contact from './contact/contact.js';
import Skills from './skills/skills.js';


import './bory.css';
function Body({dark}) {

    return (
        <div className={dark==1?'bodydark':'body'}>
             <section id='About'>
                   <About/>
             </section>
             <section id='Projects'>
                 <Projects/>
           </section>

       <section id='Skills'>
                <Skills/>
        </section>

       <section id='Contact'>
             <Contact/>
        </section>
        
        </div>
    )
}

export default Body
