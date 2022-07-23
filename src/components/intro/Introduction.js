import React from 'react';
import './Introduction.css';
import ProfileImage from '../../img/profile-img.png';

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>Hello, my name is</h2>
          <h1 className='intro-name'>Adolf Schmuck</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Email Developer</div>
              <div className='intro-title-item'>Web Developer</div>
              <div className='intro-title-item'>UI/UX Designer</div>
              <div className='intro-title-item'>Photographer</div>
              <div className='intro-title-item'>Writer</div>
              <div className='intro-title-item'>Content Creator</div>
            </div>
          </div>
          <div className='intro-description'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services, and
            online stores.
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='i-bg'></div>
        <img src={ProfileImage} alt='' className='intro-img' />
      </div>
    </div>
  );
};

export default Introduction;
