import React, { useEffect, useState } from 'react';
import GestureItem from './GestureItem';

const Battle = ({nextStep, pickedGesture, level, setFirstStep, setNextStep, score, setScore}) => {
  
  const [classNameAnim, setClassNameAnim] = useState('');
  const [housePick, setHousePick] = useState('');
  const [win, setWin] = useState('');

  useEffect(() => {
    if (nextStep) {
      setClassNameAnim('battleground active')
    } else {
      setClassNameAnim('battleground')
    }

    const pickGesture = () => {
      const origGes = ['rock', 'paper', 'scissors']
      const bonusGes = ['rock', 'paper', 'scissors', 'lizard', 'spock']
      if (level === 'orig') {
        let rand = 0 + Math.random() * (2 + 1 - 0)
        return origGes[Math.floor(rand)]
      } else {
        let rand = 0 + Math.random() * (4 + 1 - 0)
        return bonusGes[Math.floor(rand)]
      }
    }

    setTimeout(() => {
      setHousePick(pickGesture())
    }, 1000)

  // eslint-disable-next-line
  }, [nextStep, level])

  useEffect(() => {
    const winnerCalc = () => {
      if (level === 'orig') {
        if (housePick === pickedGesture) return 'draw' 
        else if (housePick === 'rock' && pickedGesture === 'paper') return 'win'
        else if (housePick === 'rock' && pickedGesture === 'scissors') return 'lose'
        else if (housePick === 'paper' && pickedGesture === 'rock') return 'lose'
        else if (housePick === 'paper' && pickedGesture === 'scissors') return 'win'
        else if (housePick === 'scissors' && pickedGesture === 'rock') return 'win'
        else if (housePick === 'scissors' && pickedGesture === 'paper') return 'lose'
      } else {
        if (housePick === pickedGesture) return 'draw' 
        else if (housePick === 'rock' && pickedGesture === 'paper') return 'win'
        else if (housePick === 'rock' && pickedGesture === 'scissors') return 'lose'
        else if (housePick === 'rock' && pickedGesture === 'lizard') return 'win'
        else if (housePick === 'rock' && pickedGesture === 'spock') return 'lose'
        else if (housePick === 'paper' && pickedGesture === 'rock') return 'lose'
        else if (housePick === 'paper' && pickedGesture === 'scissors') return 'win'
        else if (housePick === 'paper' && pickedGesture === 'lizard') return 'lose'
        else if (housePick === 'paper' && pickedGesture === 'spock') return 'win'
        else if (housePick === 'scissors' && pickedGesture === 'rock') return 'win'
        else if (housePick === 'scissors' && pickedGesture === 'paper') return 'lose'
        else if (housePick === 'scissors' && pickedGesture === 'lizard') return 'win'
        else if (housePick === 'scissors' && pickedGesture === 'spock') return 'lose'
        else if (housePick === 'lizard' && pickedGesture === 'rock') return 'win'
        else if (housePick === 'lizard' && pickedGesture === 'paper') return 'lose'
        else if (housePick === 'lizard' && pickedGesture === 'scissors') return 'win'
        else if (housePick === 'lizard' && pickedGesture === 'spock') return 'lose'
        else if (housePick === 'spock' && pickedGesture === 'rock') return 'lose'
        else if (housePick === 'spock' && pickedGesture === 'paper') return 'win'
        else if (housePick === 'spock' && pickedGesture === 'scissors') return 'lose'
        else if (housePick === 'spock' && pickedGesture === 'lizard') return 'win'
      }
    }
    setWin(winnerCalc())
// eslint-disable-next-line
  }, [housePick])

  useEffect(() => {
    if (win === 'win') {
      setScore(score + 1)
      localStorage.setItem('score', score)
    } else if (win === 'lose' && score > 0) {
      setScore(score - 1)
      localStorage.setItem('score', score)
    }
    // eslint-disable-next-line
  }, [win])

  const playAgain = () => {
    setNextStep(false)
    setFirstStep(true)
  }
  
  return (
    <div className={classNameAnim}>
      <div className='battleground__item'>
        <span>you picked</span>
        <GestureItem readOnly={true} gestureName={pickedGesture} level={level}/>
      </div>
      {
        win === 'lose' ? 
          <div className='winner-title'>
            <span>you lose</span>
            <button onClick={playAgain}>play again</button>
          </div>
        : win === 'win' ?
          <div className='winner-title'>
            <span>you win</span>
            <button onClick={playAgain}>play again</button>
          </div>
        : win === 'draw' ? 
          <div className='winner-title'>
            <span>draw</span>
            <button onClick={playAgain}>play again</button>
          </div>
        : <></>
      }
      <div className='battleground__item'>
        <span>the house picked</span>
        {
          housePick === '' ?
          <div className='empty'>
            <div className='empty__background'></div>
          </div>
          :
          <GestureItem readOnly={true} gestureName={housePick} level={level}/>
        }
      </div>
    </div>
  );
};

export default Battle;