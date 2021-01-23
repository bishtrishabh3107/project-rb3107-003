import React from 'react';
import Img from 'gatsby-image';
import '../assets/styles/index.scss';

function ProductClassTemplate({
  productClass,
  name,
  description,
  fluid,
  publishedAt,
  content,
  Link1,
  link2,
  priceRange,
}) {
  return (
    <div className="productClass">
      <div className="productMain">
        <div className="productMedia">
          <h1>{productClass.replaceAll('_', ' ')}</h1>
          <Img
            fluid={fluid}
            style={{
              maxHeight: 'calc(70vh - 4rem)',
              maxWidth: 'calc(70vh - 4rem)',
            }}
          />
        </div>
        <div className="productAffiliate">
          <a href={`${Link1}`} className="affiliateLink1">
            Buy From Amazon
          </a>
          <hr />
          <a href={`${link2}`} className="affiliateLink2">
            Buy From Flipkart
          </a>
          <hr />
          <h2>Price Range: {priceRange}</h2>
        </div>
      </div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>{content}</p>
      <h3>Published On: {publishedAt}</h3>
    </div>
  );
}

export default ProductClassTemplate;
