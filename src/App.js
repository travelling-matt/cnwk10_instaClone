import React, { useState } from "react";
import "./App.css";
import { PostCreator } from "./components/postCreator";

const App = () => {
  const [user, setUser] = useState(); //useState starts undefined. revise useStates.
  const [post, setPost] = useState();
  const [list, setList] = useState([]);
  const [pics, setPics] = useState([]);
  //const [error, setError] = useState({ error: false, message: "" });

  const submitHandler = (e) => {
    e.preventDefault(); //prevents losing data when page re-rendered e.g. on button click
    setList([...list, post]); //use spread operator to update list array with submitted post
  };

  const handler = async () => {
    try {
      const response = await fetch("https://picsum.photos/400");
      console.log("http response", response);
      // if (response.status !== 200) {
      //   throw new Error("oops http error");
      // }
      const data = await response.json();
      console.log("API info all", data);
      console.log("API info array 0", data[0]);
      setPics(data);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please sign in"}</h1>
      <input onChange={(e) => setUser(e.target.value)} />
      <PostCreator setPost={setPost} submitHandler={submitHandler} />
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      {pics.map((item, index) => {
        return <img key={index}>{item}</img>;
      })}
    </div>
  );
};

export default App;
