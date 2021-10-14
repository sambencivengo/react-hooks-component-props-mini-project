import React from 'react';

function Article({ articles }) {
  console.log(articles);
  const post = articles.map((article) => {
    console.log(article);
    return (
      <>
        <h3>{article.title}</h3>
        <small>{article.date}</small>
        <p>{article.preview}</p>
      </>
    );
  });
  return (
    <div className="Article">
      <main>{post}</main>
    </div>
  );
}

export default Article;
