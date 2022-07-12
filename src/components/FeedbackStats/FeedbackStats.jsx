import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const feedbackReviews = feedback.length;
  const averageRating =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackReviews;
  const average = averageRating.toFixed(1); /*.replace(/[.,]0$/, '')*/

  return (
    <div className="feedback-stats">
      <h4>{feedbackReviews} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
