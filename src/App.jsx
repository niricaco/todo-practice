import { useState } from "react";
import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: "Cím 1", content: "Tartalom 1", date: "Dátum 1" },
    ]);
  };

  return (
    <main>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Content" />
      <button onClick={postBlogPost}>Post</button>
      <h1>Posztok</h1>
      {blogPosts.map((blogPost) => (
        <article>
          <h1>{blogPost.title}</h1>
          <p>{blogPost.content}</p>
          <h5>{blogPost.date}</h5>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Content" />
          <button>Edit</button>
          <button>Save</button>
          <button>Cancel</button>
          <button>Remove</button>
        </article>
      ))}
    </main>
  );
}

export default App;

// https://reactjs.org/docs/thinking-in-react.html
