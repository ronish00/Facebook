import './closefriend.css'

const Closefriend = (props) => {
  return (
    <li key={props.user.id} className="sidebarFriend">
        <img src={props.user.profilePicture} className="sidebarFriendImg" alt="" />
        <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  )
}

export default Closefriend
