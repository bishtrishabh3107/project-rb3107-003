import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BestProductLine from '../organ/BestProductLine';
import ArticleSectionSideScreen from '../organ/ArticleSectionSideScreen';
import Bounce from 'react-reveal/Bounce';
import '../../assets/styles/index.scss';

function SideScreen() {
  return (
    <div>
      <div className="sideScreen_ProductSection">
        <StaticQuery
          query={SideScreenPost}
          render={(data) => {
            return (
              <div>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <Bounce key={node.id}>
                    <BestProductLine
                      key={node.id}
                      fixed={node.image.childImageSharp.fixed}
                      productFamily={node.productFamily}
                      slug={node.slug}
                    />
                  </Bounce>
                ))}
              </div>
            );
          }}
        />
      </div>
      <div>
        <Bounce>
          <ArticleSectionSideScreen />
        </Bounce>
      </div>
    </div>
  );
}

export default SideScreen;

const SideScreenPost = graphql`
  {
    allStrapiProduct(
      filter: { rating: { eq: 10 } }
      limit: 15
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
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
