import { Link } from 'react-router-dom';

const NotFound = () => {
  const centerText = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const linkColor = {
    color: '#00f',
    textDecoration: 'none',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 4
  };
  return (
    <div style={centerText}>
      <h1>
        This page is <b>not found</b>
      </h1>
      <Link to="/" style={linkColor}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
