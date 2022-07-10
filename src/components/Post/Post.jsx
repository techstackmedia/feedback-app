import { useParams } from 'react-router-dom';

const Post = () => {
  const params = useParams();

  return (
    <div className="container">
      <h1>Post {params.id}</h1>
      <p>Post {params.name}</p>
    </div>
  );
};

export default Post;
