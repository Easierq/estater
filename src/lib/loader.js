import { defer } from "react-router-dom";
import apiRequest from "./../req";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return defer({
    post: res.data,
  });
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  // const postPromise = apiRequest("/posts?" + query);
  const postPromise = apiRequest("/posts");
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
