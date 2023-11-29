import "./Navbar.scss";
import { AiOutlineHome, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsMoon, BsSun, BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useContextValue } from "../../context/darkModeContext";

export default function Navbar() {
  const { isDarkMode, toogleIsDarkMode } = useContextValue(); //contextValue

  return (
    <div className="navbar">
      <div className="left">
        <h1>Social</h1>
        <div className="icons">
        <AiOutlineHome />
        {isDarkMode ? (
          <BsSun onClick={toogleIsDarkMode} />
        ) : (
          <BsMoon onClick={toogleIsDarkMode} />
        )}

        <BiCategory />
        <div className="searchBox">
          <div className="searchIcon">
            <BsSearch className="searchIcon" />
          </div>
          <input type="search" placeholder="Search" />
        </div>
       </div>
       </div>
      <div className="right">
        <AiOutlineUser />
        <AiOutlineMail />
        <IoMdNotificationsOutline />
        <div className="user">
          <img
            src=" https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
          />
          <span>John Deo</span>
        </div>
      </div>
    </div>
  );
}