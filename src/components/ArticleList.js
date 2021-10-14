import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      <main>
        <Article key={articles.id} articles={articles} />
      </main>
    </div>
  );
}

export default ArticleList;
