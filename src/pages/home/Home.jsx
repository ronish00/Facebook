import SideBar from "../../component/sidebar/SideBar"
import TopBar from "../../component/topbar/TopBar"
import Feed from "../../component/feed/Feed"
import './home.css'
import RightBar from "../../component/rightbar/RightBar"

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}

export default Home
