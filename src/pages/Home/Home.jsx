import { motion } from 'framer-motion';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import FeedbackStats from '../../components/FeedbackStats/FeedbackStats';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </motion.div>
    </>
  );
};

export default Home;
