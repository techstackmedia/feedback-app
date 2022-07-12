import { Link } from 'react-router-dom';

const Header = ({ text, bgColor, textColor, textUnderline }) => {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  const headerLinkStyles = {
    color: textColor,
    textDecoration: textUnderline,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          <Link to="/" style={headerLinkStyles}>
            {text}
          </Link>
        </h2>
      </div>
    </header>
  );
};

export default Header;
