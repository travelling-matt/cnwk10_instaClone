import React, { useState, useEffect } from "react";
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

  const picAPI = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=2&limit=6");
      console.log(response);
      if (response.status !== 200) {
        throw new Error("oops http error");
      }
      const picData = await response.json([]);
      console.log("API info all", picData);
      //console.log("API info array 0", picData[0]);
      setPics(picData);
      console.log(pics);
      return(picData);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    picAPI()
  }, []);
  
  return (
    <div className="App">
      <div className="NavTop">
        Instagram
      </div>
      {/* <h1>{user ? `Welcome ${user}` : "Please sign in"}</h1>
      <input onChange={(e) => setUser(e.target.value)} />
      <PostCreator setPost={setPost} submitHandler={submitHandler} />
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })} */}
      {pics.map((item, index) => {
        return <img key={index} src={item.url} alt={item.author}/>;
        // console.log(`${item.url[0]}`);
      })}
    </div>
  );
};

export default App;
