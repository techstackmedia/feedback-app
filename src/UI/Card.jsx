const Card = ({ children, reverse }) => {
  const classes = `card ${reverse && 'reverse'}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
