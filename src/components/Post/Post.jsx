import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route
          path="/show"
          element={<h1>This is a text but can also be a component instead</h1>}
          // http://localhost:3000/post/show
        ></Route>
      </Routes>
    </>
  );
};

export default Post;
