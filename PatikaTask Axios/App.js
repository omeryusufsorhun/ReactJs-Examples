import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getUser(user_id) {
      try {
        const users = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${user_id}`
        );

        const posts = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${user_id}`
        );
        const merge = Object.assign(users, posts);
        console.log(merge);
      } catch (error) {
        console.error(error);
      }
    }
    getUser(1);
  });

  return <div className="App"></div>;
}

export default App;
