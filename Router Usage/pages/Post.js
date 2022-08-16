import React from "react";
import { Link } from "react-router-dom";
function Post() {
  return (
    <div>
      <h2>burası blogların postlarının olduğu yer</h2>
      <ul>
        <li>
          {" "}
          <Link to="/blog/1">post1</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/blog/2">post2</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/blog/3">post3</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Post;
