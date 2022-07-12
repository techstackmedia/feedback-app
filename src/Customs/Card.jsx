import PropTypes from 'prop-types';

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

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
