import { useContext, useState } from 'react';
import { FaRegLightbulb, FaLightbulb, FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../../shared/Card';

const FeedbackItem = ({ feedbackItem }) => {
  const { clickDeleteHandler, clickEditHandler } = useContext(FeedbackContext);
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
      <button className="edit" onClick={() => clickEditHandler(feedbackItem)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
