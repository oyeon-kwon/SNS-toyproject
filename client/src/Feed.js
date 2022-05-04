import './feed.css';
import Post from './Post';

function Feed({ posts }) {

    return (
      <div>
          {
              posts.map((post) => {
                  return <Post post={post} />
              })
          }
      </div>
    );
  }
  
  export default Feed;