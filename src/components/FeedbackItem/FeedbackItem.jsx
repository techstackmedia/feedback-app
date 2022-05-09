import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from '../../UI/Card';
const FeedbackItem = ({ feedbackItem, handleClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleModeClick = () => {
    setIsDarkMode((prev) => {
      return !prev;
    });
  };

  return (
    <Card reverse={isDarkMode}>
      <button onClick={handleModeClick}>
        {isDarkMode ? <FaRegLightbulb /> : <FaLightbulb />}
      </button>
      <div className="num-display">{feedbackItem.rating}</div>
      <button className="close" onClick={() => handleClick(feedbackItem.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedbackItem: PropTypes.object.isRequired,
};

export default FeedbackItem;
