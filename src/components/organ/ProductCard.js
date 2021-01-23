import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function ProductCard({ name, slug, date, description, fluid }) {
  return (
    <div>
      <div className="productCard">
        <Link to={`/products/${slugify(productFamily)}`}>
          <div className="productCard__Image">
            <Img fluid={fluid} />
          </div>
        </Link>
        <div className="productCard__Info">
          <h3 className="productCard__Date">{date}</h3>
          <Link to={`/${slug}`}>
            <h1 className="productCard__Title">{name}</h1>
          </Link>
          <p className="productCard__Text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
