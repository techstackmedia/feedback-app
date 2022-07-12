import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackItem from './components/FeedbackItem/FeedbackItem';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackData from './mocks/FeedbackData';
import Button from './Customs/Button';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const clickDeleteHandler = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(prev => {
        return prev.filter(item => {
          return item.id !== id;
        });
      });
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={clickDeleteHandler} />
      </div>
    </>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

FeedbackStats.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string,
    }).isRequired
  ),
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

FeedbackItem.propTypes = {
  feedbackItem: PropTypes.object.isRequired,
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default App;
