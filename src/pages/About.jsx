import { Link } from 'react-router-dom';
import Card from '../shared/Card';
import Header from '../components/Header/Header';
import { AnimatePresence, motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <Card>
              <div className="about">
                <h1>About This Project</h1>
                <p>
                  This is a React app to leave feedback for a product or service
                </p>
                <p>Version 1.0.0</p>
                <Link to="/">Back to Home</Link>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default About;
