import React from 'react';
// { useState } 
import { BsGithub, BsLinkedin } from "react-icons/bs";


const SocialMedia = () => {
    
    // const [toggle, setToggle] = useState(false);
   
    return (
    <>
    <div className='app__social'>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
    </>
  )
}

export default SocialMedia;