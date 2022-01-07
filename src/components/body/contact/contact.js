import React from 'react'
import './contact.css';
import Sperater from '../sperater';
import SocialList from '../social';
const  Contact = () => {

    return (
        <div className = 'contactMainx'>
         <Sperater/>
         <label className='sectionTitle'>Contact</label>
         <div className='conatinerCon'>
            <div className ='left'>
            <span> contact me in any platform i will be there waiting for you</span>
                <SocialList/>
            </div>
            <div className ='right'>
                <a download href={require('../../../assets/resume.docx')} className='download' >Download resume</a>
            </div>
            </div>
        </div>
    )
}
export default  Contact;