import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/post").then((res) => {
      setPostList(res.data);
    })
  }, [])

  return (
    <div className="App">
      {
        postList.map((value, key) => {
            return (
              <div className="postInfo">
                <div className="title">{value.title}</div>
                <div className="description">{value.description}</div>
                <div className="duedate">{value.duedate}</div>
                <div className="username">{value.username}</div>
              </div>
            );
        })
      }
    </div>
  );
}

export default App;
