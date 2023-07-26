import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

// console.log(blogData);

function App() {
  return (
    <div className="App">  
      <Header blogName={blogData.name}/>    
      <About image={blogData.logo} aboutText={blogData.about}/>
      <Article title = {blogData.title} date = {blogData.date} preview = {blogData.preview}/>
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
