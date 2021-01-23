import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../assets/styles/index.scss';
import Bounce from 'react-reveal/Bounce';
import { slugify } from '../../assets/utilityFunctions';

function RatingProductLine({ productFamily, fixed, slug }) {
  return (
    <div>
      <Bounce left>
        <div>
          <Link to={`/products/${slugify(productFamily)}`}>
            <div className="ratingProductLine">
              <Img fixed={fixed} />
              <h1>{productFamily}</h1>
            </div>
          </Link>
        </div>
      </Bounce>
    </div>
  );
}

export default RatingProductLine;
