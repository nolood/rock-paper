import React from 'react';
import logo from './../assets/logo.svg'
import bonuslogo from './../assets/logo-bonus.svg'

const UpperBar = ({level, score}) => {
  return (
      <div className='upper-bar'>
        <div className='bar-logos'>
          <img src={level === 'orig' ? logo : bonuslogo} alt="" />
        </div>
        <div className='bar-score'>
          <span className='score-text'>score</span>
          <span className='score-num'>{score}</span>
        </div>
      </div>
  );
};

export default UpperBar;