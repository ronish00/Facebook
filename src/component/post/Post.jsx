import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = (props) => {

  const [like, setLike] = useState(props.post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likehandler = () => {
    setLike(isLiked ? like - 1 : like + 1 )
    setIsLiked(!isLiked)
  }


  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter(user => user.id === props.post.userId)[0].profilePicture} alt="" />
                <span className='postUsername'>{Users.filter( user => user.id === props.post.userId )[0].username}</span>
                <span className='postDate'>{props.post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{props.post?.desc}</span>
            <img className='postImg' src={props.post.photo} alt="" srcSet="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="assets/like.png" onClick={likehandler} alt="" />
                <img className='likeIcon' src="assets/heart.png" onClick={likehandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postButtonRight">
                <span className="postCommentText">{props.post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
