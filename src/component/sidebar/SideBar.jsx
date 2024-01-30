import Closefriend from "../closefriend/Closefriend";
import "./sidebar.css";
import {
  Bookmark,
  CalendarToday,
  Chat,
  ContactSupport,
  Group,
  LocalLibrary,
  PlayCircleFilled,
  RssFeed,
  Work,
} from "@mui/icons-material";
import { Users } from "../../dummyData";

const SideBar = () => {
  const sidebarIcon = [
    {
      id: 1,
      title: "Feed",
      icon: <RssFeed />,
    },
    {
      id: 2,
      title: "Chat",
      icon: <Chat />,
    },
    {
      id: 3,
      title: "Videos",
      icon: <PlayCircleFilled />,
    },
    {
      id: 4,
      title: "Groups",
      icon: <Group />,
    },
    {
      id: 5,
      title: "Bookmarks",
      icon: <Bookmark />,
    },
    {
      id: 6,
      title: "Help",
      icon: <ContactSupport />,
    },
    {
      id: 7,
      title: "Jobs",
      icon: <Work />,
    },
    {
      id: 8,
      title: "Events",
      icon: <CalendarToday />,
    },
    {
      id: 9,
      title: "Course",
      icon: <LocalLibrary />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {sidebarIcon.map((item) => (
            <li key={item.id} className="sidebarListItem">
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {
            Users.map( user => (
              <Closefriend key={user.id} user={user} />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
