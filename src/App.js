import PropTypes from "prop-types";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Header text="Learn React" bgColor="blue" textColor="red" />
    </>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "red",
  textColor: "blue",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default App;
