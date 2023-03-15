import React, { useState, useEffect } from 'react';
import bg from './../assets/bg-triangle.svg';
import bonusbg from './../assets/bg-pentagon.svg';
import GestureItem from './GestureItem';

const GestureChoice = ({level, firstStep, gameStart}) => {
  const [classNameAnim, setClassNameAnim] = useState('')
  useEffect(() => {
    if (firstStep) {
      setClassNameAnim('gestures active')
    } else {
      setClassNameAnim('gestures')
    }
  }, [firstStep])
  
  return (
    <div className={classNameAnim}>
      <img className='triangle' src={level === 'orig' ? bg : bonusbg} alt="" />
      {level === 'orig' ? 
        <>
          <GestureItem gameStart={gameStart} level={level} gestureName={'rock'}/>
          <GestureItem gameStart={gameStart} level={level} gestureName={'scissors'}/>
          <GestureItem gameStart={gameStart} level={level}  gestureName={'paper'}/>
        </>
        :
        <>
          <GestureItem gameStart={gameStart} level={level} gestureName={'rock'}/>
          <GestureItem gameStart={gameStart} level={level} gestureName={'scissors'}/>
          <GestureItem gameStart={gameStart} level={level} gestureName={'paper'}/>
          <GestureItem gameStart={gameStart} level={level} gestureName={'lizard'}/>
          <GestureItem gameStart={gameStart} level={level} gestureName={'spock'}/>
        </>
      }
    </div>
  );
};

export default GestureChoice;