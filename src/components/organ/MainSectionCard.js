import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

function MainSectionCard({ title, date, description, fluid, slug }) {
  return (
    <div className="MainSectionCard">
      <Link to={`/articles/${slug}`}>
        <Img fluid={fluid} />
      </Link>
      <Link to={`/articles/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <h3>{date}</h3>
      <h2>{description}</h2>
    </div>
  );
}

export default MainSectionCard;
