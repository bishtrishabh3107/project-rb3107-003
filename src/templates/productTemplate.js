import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Global/Layout';
import ProductClassTemplate from './ProductClassTemplate';
import SideScreen from '../components/organism/SideScreen';

export const query = graphql`
  query($productFamily: String!) {
    allStrapiProduct(
      filter: { productFamily: { in: [$productFamily] } }
      sort: { fields: productClass, order: ASC }
    ) {
      edges {
        node {
          id
          name
          publishedAt(formatString: "DD-MM-YYYY")
          description
          content
          productClass
          productFamily
          link1
          link2
          priceRange
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
    strapiProduct(
      productClass: { eq: "Our_Prime_Choice" }
      productFamily: { in: [$productFamily] }
    ) {
      productFamily
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const product = data.strapiProduct;
  const seo = {
    metaTitle: product.productFamily,
    metaDescription: product.description,
    shareImage: product.image,
    product: true,
  };

  return (
    <Layout seo={seo}>
      <div className="columns">
        <div className="column is-two-thirds" style={{ marginRight: '1.5rem' }}>
          <h1>{product.productFamily}</h1>
          {data.allStrapiProduct.edges.map(({ node }) => (
            <ProductClassTemplate
              key={node.id}
              productClass={node.productClass}
              name={node.name}
              description={node.description}
              fluid={node.image.childImageSharp.fluid}
              publishedAt={node.publishedAt}
              content={node.content}
              link1={node.link1}
              link2={node.link2}
              priceRange={node.priceRange}
            />
          ))}
        </div>
        <div className="column is-one-thirds">
          <SideScreen />
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;
