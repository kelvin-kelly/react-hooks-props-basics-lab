import React from "react";
import user from "../data/user";
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
       {user.bio} 
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     
        Link
        <a href= "#">{user.links.github}</a>
        <a href="#">{user.links.linkedin}</a>.
      
    </div>
  );
}

export default About;
