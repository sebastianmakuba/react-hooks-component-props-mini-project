import React from "react";
import Article from "./Article"

export default function ArticleList ({articles}){

    return (
        <main>
           {articles.map ((article)  => 
           (<Article 
           key = {article.id}
           title = {article.title}
           preview = {article.preview}
           date = {article.date}
           />)           
           )}
        </main>
    )
}