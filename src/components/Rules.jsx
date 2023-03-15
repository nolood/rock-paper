import React from 'react';
import close from './../assets/icon-close.svg';
import rules from './../assets/image-rules.svg';
import bonusrules from './../assets/image-rules-bonus.svg'

const Rules = ({rulesShow, setRulesShow, level}) => {
  return (
    <section onClick={() => setRulesShow(false)} className={rulesShow ? 'section rules-modal active' : 'section rules-modal'}>
      <div onClick={e => e.stopPropagation()} className='container rules-wrapper'>
        <div className='rules__title'>
          <span>rules</span>
          <img onClick={() => setRulesShow(false)} src={close} alt="" />
        </div>
        <img className='rules__img' src={level === 'orig' ? rules : bonusrules} alt="" />
      </div>
    </section>
  );
};

export default Rules;