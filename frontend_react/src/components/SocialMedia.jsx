import React from 'react';
// { useState } 
import { BsGithub, BsLinkedin } from "react-icons/bs";


const SocialMedia = () => {
    
    // const [toggle, setToggle] = useState(false);
   
    return (
    <>
    <div className='app__social'>
        <a href='https://github.com/ESIEA-Dive' target="_blank" rel="noreferrer">
            <div >
                <BsGithub />
            </div>
        </a>
        <a href='https://www.linkedin.com/in/alexandre-dive/' target="_blank" rel="noreferrer"> 
            <div >
                <BsLinkedin />
            </div>
        </a>
    </div>
    </>
  )
}

export default SocialMedia;