import React from 'react';
import Layout from '../components/Global/Layout';
import { graphql, StaticQuery } from 'gatsby';
import SideScreen from '../components/organism/SideScreen';
import Bounce from 'react-reveal/Bounce';
import RatingProductLine from '../components/organ/RatingProductLine';
import '../assets/styles/index.scss';

function trending() {
  return (
    <div>
      <Layout>
        <div className="columns is-variable is-tablet is-8">
          <div className="column is-two-thirds ">
            <StaticQuery
              query={trendingProductsQuery}
              render={(data) => {
                return (
                  <div>
                    {data.allStrapiProduct.edges.map(({ node }) => (
                      <RatingProductLine
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
          <div className="column is-one-thirds">
            <SideScreen />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default trending;

const trendingProductsQuery = graphql`
  {
    allStrapiProduct(filter: { rating: { eq: 10 } }, limit: 10) {
      edges {
        node {
          id
          name
          slug
          productFamily
          image {
            childImageSharp {
              fixed(height: 130, width: 130) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
