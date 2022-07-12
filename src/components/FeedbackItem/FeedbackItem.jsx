import { useState } from 'react';
import { FaRegLightbulb, FaLightbulb, FaTimes } from 'react-icons/fa';
import Card from '../../Customs/Card';

const FeedbackItem = ({ feedbackItem, handleClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleModeClick = () => {
    setIsDarkMode(prev => {
      return !prev;
    });
  };

  const click = () => {
    return handleClick(feedbackItem.id);
  };

  return (
    <Card reverse={isDarkMode}>
      <button onClick={handleModeClick}>
        {isDarkMode ? <FaRegLightbulb /> : <FaLightbulb />}
      </button>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={click}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
