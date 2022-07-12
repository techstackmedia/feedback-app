import FeedbackItem from '../FeedbackItem/FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  const feedbackElement = feedback.map(feedbackItem => {
    return (
      <FeedbackItem
        key={feedbackItem.id}
        feedbackItem={feedbackItem}
        handleClick={handleDelete}
      />
    );
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

export default FeedbackList;
