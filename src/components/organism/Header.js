import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import '../../assets/styles/index.scss';
import { GiPumpkinLantern } from 'react-icons/gi';
import { graphql, StaticQuery } from 'gatsby';
import { slugify } from '../../assets/utilityFunctions';

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="icon">
            <GiPumpkinLantern />
          </span>
          <h2>Goods </h2>
          <h1>UMPIRE </h1>
          <span className="icon">
            <GiShoppingCart />
          </span>
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ' '}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navMenu"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-end">
          <a className="navbar-item" href="/articles">
            Must Read
          </a>
          <a className="navbar-item" href="/products">
            Products
          </a>
          <a className="navbar-item" href="/sociallyacclaimed">
            Socially Acclaimed
          </a>
          <a className="navbar-item" href="/trending">
            Trending
          </a>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Popular Products</a>
          <div className="navbar-dropdown">
            <StaticQuery
              query={popularPagesQuery}
              render={(data) => {
                return (
                  <div>
                    {data.allStrapiProduct.edges.map(({ node }) => (
                      <a
                        className="navbar-item"
                        href={`/products/${slugify(node.productFamily)}`}
                        key={node.id}
                      >
                        {node.name}
                      </a>
                    ))}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const popularPagesQuery = graphql`
  {
    allStrapiProduct(
      filter: { rating: { eq: 10 } }
      limit: 10
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
          productFamily
          image {
            childImageSharp {
              fixed(height: 64, width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
