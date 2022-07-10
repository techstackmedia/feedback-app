import React from 'react';

const NotFound = () => {
  const centerText = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  return (
    <div style={centerText}>
      <h1>
        This page is <b>not found</b>
      </h1>
    </div>
  );
};

export default NotFound;
