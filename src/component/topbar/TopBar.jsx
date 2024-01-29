import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

const TopBar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='Logo'>Facebook</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input type="text" placeholder='Search Facebook' />
        </div>
      </div>
      
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className='topbarIconBadge'>3</span>
          </div>
          <div className="topbarIconItem">
            <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
