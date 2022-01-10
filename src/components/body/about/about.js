import React from 'react'

import { motion } from "framer-motion"
import './about.css'
import SocialList from '../social.js';
const  About = () => {
 
    return (
        <div className='about'>
         <div className='aboutTop'>
                  <div className='text'>
         <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
           >
                  Hello 👋 i'm  <br/> <span  className='name'> Yassine  Attou </span> <br/>
                  CS student who is really passionate about web development 🔥
                    
                    </motion.div>
                    </div >
                    <div >
                     <img  className='imgg' src={require('../../../assets/8401.png')} alt='intro'></img>
                    </div>

         </div>
         <div className='info'>
             <SocialList/>
         </div>
        </div>
    )
}
export default  About;