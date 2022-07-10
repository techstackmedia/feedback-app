import { Navigate } from 'react-router-dom';

const Post = () => {
  //   const status = 202;
  const status = 404;

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return <h1>Post</h1>;
};

export default Post;
