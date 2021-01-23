import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Seo from './seo';
import Header from '../organism/Header';
import Footer from '../organism/Footer';

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
