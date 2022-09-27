import { motion } from 'framer-motion';
import React from 'react';
// { useState } 
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { images } from '../constants';

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
    <div className='app__card'>
        <motion.img
        src={images.greencard}
        alt='card'
        // onClick={() => setToggle(true)}
        >
    
        </motion.img>
    </div>
    </>
  )
}

export default SocialMedia;