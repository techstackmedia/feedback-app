import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Button from './shared/Button';
import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home/Home';
import Card from './shared/Card';

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <div className='container'>
          <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>

            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card>
        </div>
      </BrowserRouter>
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
