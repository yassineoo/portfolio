import React from 'react'
//import useStyles from './stylesSocial.js'
import Social from '../data/index.js';
import './social.css';
import {motion} from 'framer-motion'
const  SocialList = () => {
   /// const classes = useStyles();
    return (
        <div  className='list'> 
         {Social.map((item) => (
               
                 <a href = {item.link} key={item.platform}  target='_blank'>
                        
                 <motion.div
                       
                            animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                        >
                            <img className='icon' src={item.icon}></img>
                     </motion.div>
                 </a>
           
         ))}
            
        </div>
    )
}
export default  SocialList;