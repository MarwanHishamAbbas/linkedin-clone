import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  MdRssFeed,
  MdPeopleAlt,
  MdMenuBook,
  MdOutlineChatBubble,
  MdNotifications,
  MdSearch,
  MdArrowUpward,
} from "react-icons/md";

const NAV_ITEMS = [
  {
    icon: <MdRssFeed />,
    text: "feed",
  },
  {
    icon: <MdPeopleAlt />,
    text: "network",
  },
  {
    icon: <MdMenuBook />,
    text: "jobs",
  },
  {
    icon: <MdOutlineChatBubble />,
    text: "chat",
  },
  {
    icon: <MdNotifications />,
    text: "notices",
  },
];

const Header = () => {
  return (
    <header className="shadow-md">
      <nav className="flex items-center justify-evenly space-x-10 text-black bg-white lg:w-4/5 w-full px-2 py-4 mx-auto ">
        <a href="/">
          <Logo />
        </a>
        <nav className="flex space-x-5 lg:space-x-10">
          {NAV_ITEMS.map((item, index) => (
            <a
              href="/"
              key={index}
              className="flex flex-col relative space-y-1 items-center text-xs group"
            >
              <span className="text-3xl md:text-2xl text-black group-hover:text-blue transition-all">
                {item.icon}
              </span>
              <p className="uppercase hidden md:block group-hover:text-blue transition-all">
                {item.text}
              </p>
            </a>
          ))}
        </nav>
        <div className="flex-1 xl:flex items-center hidden">
          <MdSearch className="text-4xl text-blue" />
          <input
            type="text"
            className="w-full px-5 py-3 outline-none bg-gray bg-opacity-5 rounded-md"
            placeholder="Search"
          />
        </div>
        <a href="/" className="md:flex items-center space-x-3 hidden">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="User's Avatar"
            className="rounded-full w-12"
          />
          <div className="text-xs space-y-1">
            <p>M.HISHAM</p>
            <span className="flex flex-col text-gray">
              <p>3469 views today</p>
            </span>
            <span className="text-green flex items-center">
              <p>+203</p>
              <MdArrowUpward />
            </span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
