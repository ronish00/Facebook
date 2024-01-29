import { PermMedia } from '@mui/icons-material'
import './post.css'

const Post = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            {/* <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" srcset="" /> */}
            <input type="text" className='shareInput' placeholder="What's in your mind ?" />
        </div>
        <hr className="shareHr" />
        <div className="shareOptions">
            <div className="shareOption">
                <PermMedia className='shareIcon' />
                <span className="shareOptionText">Live Video</span>
            </div>
            <div className="shareOption">
                <PermMedia className='shareIcon' />
                <span className="shareOptionText">Photo / Video</span>
            </div>
            <div className="shareOption">
                <PermMedia className='shareIcon' />
                <span className="shareOptionText">Feeling / Activity</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
