import s from './Feedback.module.css';

const Feedback = ({ feedbackValues, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrap}>
      <p className={s.item}>Good: {feedbackValues.good}</p>
      <p className={s.item}>Neutral: {feedbackValues.neutral}</p>
      <p className={s.item}>Bad: {feedbackValues.bad}</p>
      <p className={s.item}>Total: {totalFeedback}</p>
      <p className={s.item}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
