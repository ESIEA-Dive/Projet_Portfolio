import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// The old way Static :( -const abouts = [
//   { title: 'Web Devlopment', description: 'I am a good webDev', imgUrl: images.about01 },
//   { title: 'Web Design', description: 'I am a good webDev', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am a good webDev', imgUrl: images.about03 },
//   { title: 'Web Full Stacks', description: 'I am a good webDev', imgUrl: images.about04 }
// ];

const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        A few things <span>about me</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1}}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={ about.title + index }
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap( About, 'app__about' ),
  'about',
  'app__whitebg'
  );