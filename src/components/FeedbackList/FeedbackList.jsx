import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Spinner from '../../shared/Spinner';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);
  const feedbackElement = feedback.map(feedbackItem => {
    return (
      <motion.div
        key={feedbackItem.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      </motion.div>
    );
  });

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return 'No Feedback Yet';
  } else {
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="feedback-list">
        <div>
          <AnimatePresence>{feedbackElement}</AnimatePresence>
        </div>
      </div>
    );
  }
};

export default FeedbackList;
