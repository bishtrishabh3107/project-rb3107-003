import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import '../../../assets/styles/index.scss';
import HorizontalLine from '../HorizontalLine';
import CategoryProducts from '../CategoryProducts';
import Bounce from 'react-reveal/Bounce';

function NewAgeDevicesCategoryProducts() {
  return (
    <div className="CategoryProducts">
      <Bounce left>
        <div className="horizontalLine">
          <HorizontalLine sectionTitle="New Age Devices" />
        </div>
      </Bounce>
      <div className="columns is-desktop is-gapless">
        <StaticQuery
          query={NewAgeDevicesProduct}
          render={(data) => {
            return (
              <>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div className="column" key={node.id}>
                    <div>
                      <CategoryProducts
                        fluid={node.image.childImageSharp.fluid}
                        productFamily={node.productFamily}
                        slug={node.slug}
                        key={node.id}
                      />
                    </div>
                  </div>
                ))}
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

export default NewAgeDevicesCategoryProducts;

const NewAgeDevicesProduct = graphql`
  {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "NewAgeDevices" } }
        productClass: { eq: "Our_Prime_Choice" }
      }
      sort: { fields: publishedAt, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          name
          description
          slug
          publishedAt(formatString: "DD MM YYYY")
          productFamily
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
