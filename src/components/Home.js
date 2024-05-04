import React from "react";
import user from "../data/user";
function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: user.color }}>
        <p>{user.name} is a Web Developer from {user.city}</p>
      </h1>
    </div>
  );
}

export default Home;
