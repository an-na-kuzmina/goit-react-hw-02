import React from 'react';
import s from './Options.module.css';
const Options = () => {
  return (
    <div>
      {' '}
      <button
        className={s.feedbackBtn}
        name="good"
        type="button"
        onClick={e => onUpdate(e.target.name)}
      >
        Good
      </button>
      <button
        className={s.feedbackBtn}
        name="neutral"
        type="button"
        onClick={e => onUpdate(e.target.name)}
      >
        Neutral
      </button>
      <button
        className={s.feedbackBtn}
        name="bad"
        type="button"
        onClick={e => onUpdate(e.target.name)}
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
