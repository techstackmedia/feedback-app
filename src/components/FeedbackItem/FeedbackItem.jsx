import { useContext } from 'react';
import { useState } from 'react';
import { FaRegLightbulb, FaLightbulb, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../../shared/Card';

const FeedbackItem = ({ feedbackItem }) => {
  const { clickDeleteHandler } = useContext(FeedbackContext);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleModeClick = () => {
    setIsDarkMode(prev => {
      return !prev;
    });
  };

  const click = () => {
    return clickDeleteHandler(feedbackItem.id);
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
