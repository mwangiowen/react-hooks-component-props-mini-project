import React from 'react';
import Article from './Article';
import blogData from '../data/blog';

function ArticleList() {
  const articles = blogData.posts.map((obj)=>{
    return(
      <Article key={obj.id} title={obj.title} date={obj.date}
      preview={obj.preview} />
    )
  })

  return (
    <main>
     {articles}
    </main>)}

export default ArticleList
