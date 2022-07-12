import Card from '../../UI/Card';
const FeedbackItem = ({ feedbackItem }) => {
  return (
    // without "className='random'", we get <div class="card undefinded"></div>
    // undefined as a class (.undefined)
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
