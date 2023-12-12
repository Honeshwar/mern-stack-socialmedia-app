import { Outlet } from "react-router-dom";
import { LeftBar, Navbar, RightBar } from "./components";
import { useDarkModeContextValue } from "./context/darkModeContext";

function Layout() {
  const { isDarkMode } = useDarkModeContextValue(); //contextValue
  console.log("isDarkMode", isDarkMode);
  return (
    <div className={isDarkMode ? "darkMode" : "lightMode"}>
      <Navbar />
      <div className="left-center-right">
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Layout;
