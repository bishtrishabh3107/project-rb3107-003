import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Global/Layout';
import MainSection from '../components/organism/MainSection';
import ProductSection from '../components/organism/ProductSection';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <MainSection />
      <ProductSection />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiGlobal {
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;
