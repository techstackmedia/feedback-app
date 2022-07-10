import spinner from '../components/assets/spinner.gif';

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
