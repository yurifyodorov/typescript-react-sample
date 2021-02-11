import React from "react";
import PropTypes, { InferProps } from "prop-types";

import Article from './Article';

import '../ArticleList/ArticleList.css';

export function ArticleList({
  children
}: InferProps<typeof ArticleList.propTypes>) {
  return (
    <div className="article-list">
      <Article title="Article title" price={2} />
      {children}
    </div>
  );
}

ArticleList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ArticleList;