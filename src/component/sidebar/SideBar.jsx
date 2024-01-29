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

  const friendList = [
    {
      id: 1,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 5,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 6,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 7,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 8,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 9,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
    },
    {
      id: 10,
      name: "John Doe",
      img: "/assets/person/2.jpeg",
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
          {friendList.map((friend) => (
            <li key={friend.id} className="sidebarFriend">
              <img src={friend.img} className="sidebarFriendImg" alt="" />
              <span className="sidebarFriendName">{friend.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
