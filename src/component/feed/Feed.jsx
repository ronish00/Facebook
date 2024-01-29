import './feed.css'
import SharePost from "../sharepost/SharePost"
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed
