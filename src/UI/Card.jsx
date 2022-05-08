const Card = ({ children, className, reverse }) => {
  const classReverser = {
    backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  };
  const classes = `card ${className}`;

  return (
    <div className={classes} style={classReverser}>
      {children}
    </div>
  );
};

export default Card;
