import Card from '../../UI/Card';
const FeedbackItem = ({ feedbackItem }) => {
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
