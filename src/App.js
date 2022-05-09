import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackData from './mocks/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const clickDeleteHandler = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(prev => {
        return prev.filter((item) => {  
          return item.id !== id;
        })
      })
    };
    
  };
  return (
    <>
    <Header />
    <div className="container">
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

export default App;
