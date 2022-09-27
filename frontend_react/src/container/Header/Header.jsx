import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
};

const Header = () => {

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Alexandre Dive',
        'a Software Engineer',
        'fond of React'
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop : true,
  };

  typed.current = new Typed(el.current, options);
    
  return () => {
    typed.current.destroy();
  }
}, [])

  return (
    <div className="app__header app__flex">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 1 }}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span style={{ fontSize: 30}}>👋</span>
            <div style={{ marginLeft: 10}}>
              <p className='p-text' style={{ width: 150}}>Hello , I am</p>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
              {/* Maybe add colors style={{color: '#01B399' }} */}
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text' >Web Developer</p>
            <p className='p-text'>Master's at ESIEA</p>
          </div>
       
        </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 1.5, delayChildren: 0.75 }}
      className="app__header-img"
      >
        <img src={images.css} alt='profile_bg'/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circle"
      >
        {[images.javascript, images.react, images.sanity].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg'/>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');