import "./LeftBar.scss";
import { GiThreeFriends } from "react-icons/gi";
export default function LeftBar() {
  return (
    <aside className="leftBar">
      <section>
        <div className="items">
          <img
            className="profile"
            src=" https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
          />
          <span>John Deo</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5189/5189290.png"
            alt="friends icon"
          />
          <span>Friends</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1921/1921935.png"
            alt="Groups icon"
          />
          <span>Groups</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10845/10845585.png"
            alt="Marketplace icon"
          />
          <span>Marketplace</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12228/12228967.png"
            alt="Watch icon"
          />
          <span>Watch</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3066/3066491.png"
            alt="Memories icon"
          />
          <span>Memories</span>
        </div>
      </section>
      <hr />
      <section>
        <h6>Your Shortcuts</h6>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2794/2794428.png"
            alt="Events icon"
          />
          <span>Events</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1374/1374723.png"
            alt="Gaming icon"
          />
          <span>Gaming</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11868/11868716.png"
            alt="Gallery icon"
          />
          <span>Gallery</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1179/1179069.png"
            alt="Videos icon"
          />
          <span>Videos</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
            alt="Messages icon"
          />
          <span>Messages</span>
        </div>
      </section>
      <hr />
      <section>
        <h6>Others</h6>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2037/2037747.png"
            alt="Fundraiser icon"
          />
          <span>Fundraiser</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7341/7341936.png"
            alt="Tutorials icon"
          />
          <span>Tutorials</span>
        </div>
        <div className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4762/4762311.png"
            alt="Courses icon"
          />
          <span>Courses</span>
        </div>
      </section>
    </aside>
  );
}
