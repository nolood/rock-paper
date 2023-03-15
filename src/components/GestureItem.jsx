import React, { useEffect, useState } from 'react';
import rock from './../assets/icon-rock.svg';
import paper from './../assets/icon-paper.svg';
import scissors from './../assets/icon-scissors.svg';
import lizard from './../assets/icon-lizard.svg';
import spock from './../assets/icon-spock.svg';

const GestureItem = ({gestureName, level, gameStart, readOnly}) => {
  
  const [classNameColor, setClassNameColor] = useState('');
  const [activeGesture, setActiveGesture] = useState();
 
  useEffect(() => {
    if (gestureName === 'rock') {
      setClassNameColor('gesture red')
      setActiveGesture(rock)
    } else if (gestureName === 'paper') {
      setClassNameColor('gesture blue')
      setActiveGesture(paper)
    } else if (gestureName === 'scissors') {
      setClassNameColor('gesture yellow')
      setActiveGesture(scissors)
    } else if (gestureName === 'lizard') {
      setClassNameColor('gesture purple')
      setActiveGesture(lizard)
    } else if (gestureName === 'spock') {
      setClassNameColor('gesture cyan')
      setActiveGesture(spock)
    }
  }, [gestureName])

  return (
    <>
      { !readOnly ?
        <div onClick={() => gameStart(gestureName)} className={level === 'orig' ? `${classNameColor} orig` : classNameColor}>
          <div className='gesture__background'>
            <img src={activeGesture} alt="" />
          </div>
        </div>
      :
      <div className={level === 'orig' ? `${classNameColor} orig read` : `${classNameColor} read`}>
        <div className='gesture__background'>
          <img src={activeGesture} alt="" />
        </div>
      </div>
      }
    </>
  );
};

export default GestureItem;