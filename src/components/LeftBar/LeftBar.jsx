import "./LeftBar.scss";

export default function LeftBar() {
  return (
    <aside className="leftBar">
      <section>
        <div className="items">
          <img
            style={{ width: "40px" }}
            src=" https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
          />
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
      </section>
      <section>
        <span>Your Shortcuts</span>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
      </section>
      <section>
        <span>Others</span>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
        <div className="items">
          <span>John Deo</span>
        </div>
      </section>
    </aside>
  );
}
