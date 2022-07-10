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
  const checkMode = isDarkMode ? <FaRegLightbulb /> : <FaLightbulb />;

  return (
    <Card reverse={!isDarkMode}>
      <button onClick={handleModeClick} className="light-bulb">
        {checkMode}
      </button>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={click}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => clickEditHandler(feedbackItem)}>
        <FaEdit />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
