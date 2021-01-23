import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import '../../assets/styles/index.scss';
import BestProductLine from '../organ/BestProductLine';

function BestProductsSection() {
  return (
    <div>
      <div className="mainSection__SideScreen">
        <StaticQuery
          query={theBestProductsQuery}
          render={(data) => {
            return (
              <div>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <BestProductLine
                    key={node.id}
                    fixed={node.image.childImageSharp.fixed}
                    name={node.name}
                    productFamily={node.productFamily}
                    slug={node.slug}
                  />
                ))}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default BestProductsSection;

const theBestProductsQuery = graphql`
  {
    allStrapiProduct(filter: { rating: { eq: 10 } }, limit: 8) {
      edges {
        node {
          id
          name
          slug
          productFamily
          image {
            childImageSharp {
              fixed(height: 58, width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
