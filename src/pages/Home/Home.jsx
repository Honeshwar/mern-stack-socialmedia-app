import Posts from "../../components/Posts/Posts";
import Stories from "../../components/Stories/Stories";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}
