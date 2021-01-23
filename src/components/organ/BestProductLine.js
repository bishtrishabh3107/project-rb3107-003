import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function BestProductLine({ productFamily, fixed, slug }) {
  return (
    <div>
      <div>
        <Link to={`/products/${slugify(productFamily)}`}>
          <div className="one__Entry">
            <Img fixed={fixed} />
            <h4>{productFamily}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BestProductLine;
