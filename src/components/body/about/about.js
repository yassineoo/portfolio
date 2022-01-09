import React from 'react'


import './about.css'
import SocialList from '../social.js';
const  About = () => {
   // const classes = useStyles();
    return (
        <div className='about'>
         <div className='aboutTop'>
                  <div className='text'>
                  Hello i'm  <br/> <span  className='name'> Yassine </span> <br/>
                  CS student who is really passionate about web development
                    
                    </div>

                    <div >
                     <img  className='imgg' src={require('../../../assets/8401.jpg').default} alt='intro'></img>
                    </div>

         </div>
         <div className='info'>
             <SocialList/>
         </div>
        </div>
    )
}
export default  About;