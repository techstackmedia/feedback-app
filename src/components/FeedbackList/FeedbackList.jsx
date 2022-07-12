import PropTypes from 'prop-types';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
const FeedbackList = ({ feedback }) => {
  const feedbackElement = feedback.map(feedbackItem => {
    return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />;
  });
  if (!feedback || feedback.length === 0) {
    return 'No Feedback Yet';
  } else {
    return (
      <div className="feedback-list">
        <div>{feedbackElement}</div>
      </div>
    );
  }
};

FeedbackList.propTypes = {
  // feedback: PropTypes.array
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
