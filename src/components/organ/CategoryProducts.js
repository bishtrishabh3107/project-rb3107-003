import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function CategoryProducts({ fluid, productFamily, slug }) {
  return (
    <div className="categoryProducts">
      <Link to={`/products/${slugify(productFamily)}`}>
        <Img fluid={fluid} style={{ maxHeight: 'calc(40vh - 4rem)' }} />
      </Link>
    </div>
  );
}

export default CategoryProducts;
