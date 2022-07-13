import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <h1>Oops! 🤔</h1>
        <h2>404 - Not Found</h2>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
