import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../shared/Card';

const About = () => {
  return (
    <>
      <div className="container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
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
