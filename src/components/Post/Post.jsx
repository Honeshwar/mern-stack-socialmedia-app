import "./Post.scss";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsThreeDots, BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import Comments from "../Comments/Comments.jsx";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const comments = [
    {
      id: 1,
      name: "John Deo",
      desc: "lorem22",
      time: "1hour ago",
      profilePic: "url",
    },
    {
      id: 2,
      name: "Sam Mendes",
      desc: "lorem22",
      time: "2shour ago",
      profilePic: "url",
    },
  ];
  return (
    <div className="post">
      <div className="top">
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="author"
          />
          <div className="author">
            <h4>{post.name}</h4>
            <span>a few second ago</span>
          </div>
        </div>
        <div className="right">
          <BsThreeDots />
        </div>
      </div>
      <div className="middle">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          facere optio exercitationem, ratione tempora dolore sunt quia, facilis
          laudantium aperiam voluptatum, non numquam ad inventore?
        </p>
        <img src={post.url} alt="" />
      </div>
      <div className="bottom">
        <div className="interaction-btn">
          <AiOutlineHeart />
          {/* <AiFillHeart/>*/} 2 Like
        </div>
        <div
          className="interaction-btn"
          onClick={() => setShowComments((ps) => !ps)}
        >
          <TfiCommentAlt />
          Comments
        </div>
        <div className="interaction-btn">
          <BsFillShareFill />
          Share
        </div>
      </div>
      {showComments && <Comments comments={comments} />}
    </div>
  );
}
