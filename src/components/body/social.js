import React from 'react'
//import useStyles from './stylesSocial.js'
import Social from '../data/index.js';
import './social.css';
const  SocialList = () => {
   /// const classes = useStyles();
    return (
        <div  className='list'> 
         {Social.map((item) => (
               
                 <a href = {item.link} key={item.platform}  target='_blank'>

                     <div >
                            <img className='icon' src={item.icon}></img>
                     </div>
                 </a>
           
         ))}
            
        </div>
    )
}
export default  SocialList;