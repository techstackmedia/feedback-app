import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Button from './shared/Button';
import { FeedbackProvider } from './context/FeedbackContext';
import About from './pages/About';
import Home from './pages/Home/Home';
import AboutIconLink from './components/AboutIconLink/AboutIconLink';
import NotFound from './NotFound/NotFound';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
  textUnderline: 'none',
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
