// Store.js
import { createContext, useEffect, useReducer } from "react";

export const Context = createContext({
  addPost: () => {},
  deletePost: () => {},
  toggleReaction: () => {}, // Updated function name
  initialPosts: () => {},
  postList: [],
});

function postListReducer(state, action) {
  let newPost = state;
  if (action.type === "ADD_POST") {
    newPost = [action.payload, ...state];
  } else if (action.type === "DELETE_POSTS") {
    newPost = state.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "INITIAL_POSTS") {
    newPost = action.payload.posts;
  } else if (action.type === "TOGGLE_REACTION") {
    newPost = state.map((post) => {
      if (post.id === action.payload.postId) {
        const isLiked = post.isLiked || false;
        return {
          ...post,
          reactions: isLiked ? post.reactions - 1 : post.reactions + 1,
          isLiked: !isLiked,
        };
      }
      return post;
    });
  }
  return newPost;
}

function Store({ children }) {
  const [postList, dispatchedPostList] = useReducer(postListReducer, []);

  function addPost(post) {
    dispatchedPostList({
      type: "ADD_POST",
      payload: post,
    });
  }

  function addInitialPosts(posts) {
    dispatchedPostList({
      type: "INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }

  function deletePost(postId) {
    dispatchedPostList({
      type: "DELETE_POSTS",
      payload: {
        postId,
      },
    });
  }

  function toggleReaction(postId) {
    // Updated function name
    dispatchedPostList({
      type: "TOGGLE_REACTION",
      payload: {
        postId,
      },
    });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <Context.Provider value={{ addPost, deletePost, toggleReaction, postList }}>
      {children}
    </Context.Provider>
  );
}

export default Store;
