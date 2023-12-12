// import { useState, useEffect, createContext, useContext } from "react";
// import request_API from "../api/customFetchAPI";

// //create context
// const context = createContext();

// // custom Provider component create
// export default function UserContextProvider({ children }) {
//   const [createPost, setCreatePost] = useState(null);
//   const [posts, setPosts] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (createPost) {
//       const addPost = async () => {
//         const data = await request_API.posts.create({
//           createPost,
//         });
//         if (data.success) setPosts(data);
//         else setError(data.error);
//       };
//       addPost();
//     }
//   }, [createPost]);
//   useEffect(() => {
//     if (posts === null && user) {
//       const getPost = async () => {
//         const data = await request_API.posts.getTimeLine(user?._id);
//         if (data.success) setPosts(data);
//         else setError(data.error);
//       };
//       getPost();
//     }
//   }, [posts]);
//   return (
//     <context.Provider
//       value={{ isAuthenticated, user, setUser, setIsAuthenticated }}
//     >
//       {children}
//     </context.Provider>
//   );
// }

// //get context
// export const useUserContextValue = () => {
//   return useContext(context);
// };
