import React, { useEffect, useState } from 'react';
import Battle from './Battle';
import GestureChoice from './GestureChoice';
import Rules from './Rules';
import UpperBar from './UpperBar';

const Game = () => {

  useEffect(() => {
    if (localStorage.getItem('score') === null) {
      localStorage.setItem('score', 0)
      window.location.reload()
    }
  }, []) 

  const [score, setScore] = useState(Number(localStorage.getItem('score')));
  const [rulesShow, setRulesShow] = useState(false);
  // eslint-disable-next-line
  const [level, setLevel] = useState('orig');
  const [firstStep, setFirstStep] = useState(true);
  const [nextStep, setNextStep] = useState(false);
  const [pickedGesture, setPickedGesture] = useState();

  const onOffRules = () => {
    setRulesShow(!rulesShow)
  }
  const changeLevel = () => {
    if ((level === 'orig' && !nextStep) || (level === 'bonus' && nextStep)) {
      setLevel('bonus')
    } else {
      setLevel('orig')
    }
  }

  const gameStart = (activeGesture) => {
    setPickedGesture(activeGesture)
    setFirstStep(false)
    setNextStep(true)
  }



  return (
    <div className='container original'>
      <UpperBar score={score} level={level}/>
      { firstStep ? <GestureChoice gameStart={gameStart} firstStep={firstStep} level={level}/> : <></>}
      { nextStep ? <Battle setScore={setScore} score={score} setFirstStep={setFirstStep} setNextStep={setNextStep} level={level} nextStep={nextStep} pickedGesture={pickedGesture}/> : <></> }
      <button onClick={onOffRules} className='rules-btn'>rules</button>
      <button onClick={changeLevel} className='level-btn'>change level</button>
      <Rules level={level} setRulesShow={setRulesShow} rulesShow={rulesShow}/> 
    </div>
  );
};

export default Game;