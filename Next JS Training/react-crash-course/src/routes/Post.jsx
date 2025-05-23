import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList'

function Post() {
  
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
   
  );
}

export default Post;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
