import { useState, useEffect } from "react";

import "../styles.css";

function toCamelCase(string) {
  return string
    .replace(/\s(.)/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/\s/g, " ")
    .replace(/^(.)/, function (match) {
      return match.toUpperCase();
    });
}

export default function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [post.userId]);

  return (
    <div className="post">
      <h2>{toCamelCase(post.title)}</h2>
      {author && <p className="author">By {author.name}</p>}
      <p className="body">{post.body}</p>
    </div>
  );
}
