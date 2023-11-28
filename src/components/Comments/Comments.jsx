import "./Comments.scss";
import { TfiCommentAlt } from "react-icons/tfi";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Commenter"
        />
        <input type="text" placeholder="Write a comment" required/>
        <button type="submit">Send</button>
      </div>
      <div className="bottom">
        {comments.map((comment, index) => (
          <div className="comment" key={comment.id}>
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="commenter"
              />
            </div>
            <div className="center">
              <h4>{comment.name}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias consectetur earum quos, nisi a expedita nobis animi
                quam amet, dolore ea. Blanditiis accusamus aliquid dolor unde,
                recusandae inventore dignissimos rerum dolore ipsum eligendi?
              </p>
            </div>
            <div className="right">
              <span>{comment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
