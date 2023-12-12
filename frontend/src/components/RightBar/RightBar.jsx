import "./RightBar.scss";
import { useAuthContextValue } from "../../context/authContext";

export default function RightBar() {
  const { user } = useAuthContextValue();

  return (
    <aside className="rightBar">
      <section className="items">
        <h6>Suggestions For You</h6>
        <div className="contents">
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <span>Nial Haran</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <span>Nial Haran</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </section>
      <section className="items">
        <h6>Latest Activities</h6>
        <div className="contents">
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <h6>
                {user?.username}
                <span> changed their cover picture</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> like a post</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> do comment</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> post</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
      </section>
      <section className="items">
        <h6>Online Friends</h6>
        <div className="contents">
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
