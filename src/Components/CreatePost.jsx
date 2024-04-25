import { useContext, useRef } from "react";
import { Context } from "./Store";

function CreatePost() {
  const { addPost } = useContext(Context);

  const userName = useRef();
  const descriptionIs = useRef();
  const titleIs = useRef();
  const tagsIs = useRef();
  const reactionsIs = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userId = userName.current.value;
    const postBody = descriptionIs.current.value;
    const title = titleIs.current.value;
    const reactions = reactionsIs.current.value;
    const tags = tagsIs.current.value.split(" ");

    userName.current.value = "";
    descriptionIs.current.value = "";
    titleIs.current.value = "";
    tagsIs.current.value = "";
    reactionsIs.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: postBody,
        userId: userId,
        tags: tags,
        reactions: reactions,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            User-value between 1 to 100
          </label>
          <input
            ref={userName}
            id="usernameInput"
            className="form-control w-100"
            placeholder="Enter User-value between 1 to 100 digits"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Post Title
          </label>
          <input
            ref={titleIs}
            id="titleInput"
            className="form-control w-100"
            placeholder="Enter Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionTextarea" className="form-label">
            Description
          </label>
          <textarea
            ref={descriptionIs}
            id="descriptionTextarea"
            className="form-control"
            rows="3"
            placeholder="How are you feeling today..."
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tagsInput" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsIs}
            id="reactionsIs"
            className="form-control w-100"
            value="0"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagsInput" className="form-label">
            Tags
          </label>
          <input
            ref={tagsIs}
            id="tagsInput"
            className="form-control w-96"
            placeholder="Enter tags"
          />
        </div>
        <button type="submit" className="post-btn mb-9">
          POST
        </button>
      </form>
    </>
  );
}

export default CreatePost;
