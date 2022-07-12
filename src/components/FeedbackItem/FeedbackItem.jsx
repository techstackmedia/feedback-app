import { FaTimes } from 'react-icons/fa';
import Card from '../../UI/Card';
const FeedbackItem = ({ feedbackItem, handleClick }) => {
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={() => handleClick(feedbackItem.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
