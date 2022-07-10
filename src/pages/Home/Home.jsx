import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import FeedbackStats from '../../components/FeedbackStats/FeedbackStats';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import AboutIconLink from '../../components/AboutIconLink/AboutIconLink';
const Home = () => {
  return (
    <>
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
      <AboutIconLink />
    </>
  );
};

export default Home;
