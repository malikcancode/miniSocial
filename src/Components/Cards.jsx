// Cards.js
import { useContext } from "react";
import { Context } from "./Store";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

function Cards({ post }) {
  const { deletePost, toggleReaction } = useContext(Context);

  const handleReaction = () => {
    toggleReaction(post.id);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <span>
            <button className="close-btn" onClick={() => deletePost(post.id)}>
              <MdDelete />
            </button>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-1 p-2">
              {tag}
            </span>
          ))}
        </div>
        <span className="reactions">
          <p>
            this post has {post.reactions} Likes
            <span className="heart" onClick={handleReaction}>
              {post.isLiked ? <FcLike /> : <FcLikePlaceholder />}
            </span>
          </p>
        </span>
      </div>
    </>
  );
}

export default Cards;
