import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import Button from './shared/Button';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </motion.div>
      </div>
    </FeedbackProvider>
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
