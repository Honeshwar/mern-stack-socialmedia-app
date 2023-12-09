import GENERATE_API_URL from "../utils/constants";
import axios from "axios";

async function customFetch(url, configObj) {
  try {
    //CREATE CONGIGURATION method,header,body,
    const configurations = {
      method: configObj.method,
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify(configObj.body),
    };
    console.log("configurations.body", configurations.body);
    //call api
    const data = await fetch(url, configurations);
    const dataJson = await data.json();
    console.log(dataJson);
    if (dataJson.data.error) throw new Error(dataJson.data.error);
    return { success: true, data: dataJson.data };
  } catch (error) {
    console.log("custom fetch", error);
    return { success: false, error: error.message };
  }
}
//api func obj
const request_API = {
  //call auth
  auth: {
    register: ({ username, email, password }) => {
      return customFetch(GENERATE_API_URL.auth.register(), {
        method: "POST",
        body: { username, email, password },
      });
    },
    signin: ({ email, password }) => {
      return customFetch(GENERATE_API_URL.auth.signin(), {
        method: "POST",
        body: { email, password },
      });
    },
  },
  //call USERS
  users: {
    update: (userId, payload) => {
      return customFetch(GENERATE_API_URL.auth.update(userId), {
        method: "POST",
        body: payload,
      });
    },
    get: (userId) => {
      return customFetch(GENERATE_API_URL.users.get(userId), {
        method: "GET",
        // body: { email, password },
      });
    },
    remove: (userId, payload) => {
      return customFetch(GENERATE_API_URL.auth.delete(userId), {
        method: "GET",
      });
    },
    follow: (followigUserId) => {
      return customFetch(GENERATE_API_URL.users.follow(followigUserId), {
        method: "GET",
        // body: { email, password },
      });
    },
    unfollow: (followigUserId) => {
      return customFetch(GENERATE_API_URL.users.follow(followigUserId), {
        method: "GET",
        // body: { email, password },
      });
    },
  },
  //call POSTS
  posts: {
    get(postId) {
      return customFetch(GENERATE_API_URL.posts.get(postId), {
        method: "GET",
        // body: { email, password },
      });
    },
    getTimeLine(userId) {
      return customFetch(GENERATE_API_URL.posts.getTimeline(), {
        method: "GET",
        // body: { email, password },
      });
    },
    create(payload) {
      return customFetch(GENERATE_API_URL.posts.create(), {
        method: "POST",
        body: payload,
      });
    },
    delete(postId) {
      return customFetch(GENERATE_API_URL.posts.delete(postId), {
        method: "GET",
        // body: { email, password },
      });
    },
    update(postId, payload) {
      return customFetch(GENERATE_API_URL.posts.update(postId), {
        method: "POST",
        body: payload,
      });
    },
    like(postId) {
      return customFetch(GENERATE_API_URL.posts.like(postId), {
        method: "PATCH",
        // body: { email, password },
      });
    },
  },
};

export default request_API;
