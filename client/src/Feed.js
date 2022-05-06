import './feed.css';
import Post from './Post';

function Feed({ posts }) {

    return (
      <div>
          {
              posts.map((post, id) => {
                  return <Post post={post} key={id}/>
              })
          }
      </div>
    );
  }
  
  export default Feed;