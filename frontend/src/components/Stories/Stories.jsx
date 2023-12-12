import "./Stories.scss";
import { useUserContextValue } from "../../context/userContext";

export default function Stories() {
  const { user } = useUserContextValue();
  const stories = [
    {
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: user?.username,
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_640.jpg",
      name: "John Deo",
    },
    // {
    //   url: "https://cdn.pixabay.com/photo/2016/09/24/23/34/woman-1692849_640.jpg",
    //   name: "Lio keo",
    // },
    // {
    //   url: "https://cdn.pixabay.com/photo/2015/05/20/12/45/girl-775349_640.jpg",
    //   name: "kon Hin",
    // },
    // {
    //   url: "https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_640.jpg",
    //   name: "Okay kon",
    // },
    {
      url: "https://cdn.pixabay.com/photo/2017/11/28/12/39/makeup-2983550_640.jpg",
      name: "John Sena",
    },
  ];

  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div className="card" key={index}>
          <img src={story.url} alt={story.name} />
          <div className="details">
            {index === 0 && <span className="addStory">+</span>}
            <span>{story.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
