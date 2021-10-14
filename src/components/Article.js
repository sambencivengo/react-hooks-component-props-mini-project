import React from 'react';

function Article({ articles }) {
  console.log(articles);
  const post = articles.map((article) => {
    const date = article.date || 'January 1, 1970';
    console.log(article);
    return (
      <>
        <h3>{article.title}</h3>
        <small>{date}</small>
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
