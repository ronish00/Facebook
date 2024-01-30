import './profile.css'
import SideBar from "../../component/sidebar/SideBar"
import TopBar from "../../component/topbar/TopBar"
import Feed from "../../component/feed/Feed"
import RightBar from "../../component/rightbar/RightBar"

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" className='profileCoverImg' alt="" />
                    <img src="assets/person/7.jpeg" className='profileUserImg' alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>John Doe</h4>
                    <span className='profileInfoDesc'>Hello, my Friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <RightBar profile />
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
