import AddPost from "../../components/AddPost/AddPosts";
import Posts from "../../components/Posts/Posts";
import Stories from "../../components/Stories/Stories";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Stories />
      <AddPost />
      <Posts />
    </div>
  );
}
