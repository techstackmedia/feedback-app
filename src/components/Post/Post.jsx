import { useParams } from 'react-router-dom';

const Post = () => {
  const params = useParams();
  return (
    <div className="container">
      <h1>Post ID: {params.id}</h1>
      <h1>Post Title: {params.name}</h1>
    </div>
  );
};

export default Post;
