import './feed.css';
import Post from './Post';
import PostInput from './PostInput';

function Feed({ posts, setPosts, isLogin }) {

    return (
      <div>
          <PostInput posts={posts} setPosts={setPosts} isLogin={isLogin} />
          {
              posts.map((post, id) => {
                  return <Post post={post} key={id}/>
              })
          }
      </div>
    );
  }
  
  export default Feed;