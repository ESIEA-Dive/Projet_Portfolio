
import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map ((item, index) => (
        /* eslint-disable jsx-a11y/control-has-associated-label */
        /* eslint-disable jsx-a11y/anchor-has-content */
        <a 
        
            href={`#${item}`} 
            key ={ item + index }
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#01B399'} : {}}
        />
        ))}
    </div>
  )
}

export default NavigationDots;