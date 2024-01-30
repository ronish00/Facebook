import './feed.css'
import SharePost from "../sharepost/SharePost"
import Post from '../post/Post'
import { Posts } from '../../dummyData'

const Feed = () => {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
        {
          Posts.map(post =>(
            <Post key={post.id} post={post}  />
          ))
         }
      </div>
    </div>
  )
}

export default Feed
