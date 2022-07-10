import { Navigate, useNavigate } from 'react-router-dom';

const Post = () => {
  const status = 202;
  const navigate = useNavigate();
  const handleRedirectClick = () => {
    navigate('/about');
  };
  
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <>
      <h1>Post</h1>
      <button onClick={handleRedirectClick}>Click</button>
    </>
  );
};

export default Post;
