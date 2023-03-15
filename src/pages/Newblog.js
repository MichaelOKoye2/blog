import "../styles/newblog.css";
import { useState } from "react";

const Newblog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  let blog = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    blog = {
      title: title,
      author: author,
      body: body,
    };
    console.log(blog)

    setTitle("");
    setAuthor("");
    setBody("");
  };
  return (
    <div className="newcontainer">
      <form>
        <h1>Create a New Blog</h1>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label>Author</label> <br />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        <label>Body</label> <br />
        <textarea
          type="text"
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />

        <button type="submit" className="add" onClick={handleSubmit}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Newblog;
