import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';

function ArticleCard({ title, slug, date, fluid }) {
  return (
    <div>
      <div className="articleCard">
        <Link to={`/articles/${slug}`}>
          <div className="articleCard__Image">
            <Img fluid={fluid} />
          </div>
        </Link>
        <div className="articleCard__Info">
          <p className="articleCard__Date">Published On: {date}</p>
          <Link to={`/articles/${slug}`}>
            <h1 className="articleCard__Title">{title}</h1>
            <button className="button is-primary">Continue Reading</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
