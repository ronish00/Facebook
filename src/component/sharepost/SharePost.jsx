import { PermMedia , EmojiEmotions,  Videocam } from '@mui/icons-material'
import './sharepost.css'

const Post = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" srcSet="" />
            <input type="text" className='shareInput' placeholder="What's on your mind, Jane?" />
        </div>
        <hr className="shareHr" />
        <div className="shareOptions">
            <div className="shareOption">
                <Videocam htmlColor='red' className='shareIcon' />
                <span className="shareOptionText">Live Video</span>
            </div>
            <div className="shareOption">
                <PermMedia htmlColor='green' className='shareIcon' />
                <span className="shareOptionText">Photo/video</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                <span className="shareOptionText">Feeling/activity</span>
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Post
