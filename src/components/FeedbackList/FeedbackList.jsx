import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  const feedbackElement = feedback.map(feedbackItem => {
    return (
      <motion.div
        key={feedbackItem.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <FeedbackItem
          key={feedbackItem.id}
          feedbackItem={feedbackItem}
        />
      </motion.div>
    );
  });

  if (!feedback || feedback.length === 0) {
    return 'No Feedback Yet';
  } else {
    return (
      <div className="feedback-list">
        <div>
          <AnimatePresence>{feedbackElement}</AnimatePresence>
        </div>
      </div>
    );
  }
};

export default FeedbackList;
