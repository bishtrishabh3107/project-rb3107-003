import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Global/Layout';
import Img from 'gatsby-image';
import SideScreen from '../components/organism/SideScreen';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      id
      title
      description
      content
      publishedAt(formatString: "DD MM YYYY")
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

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout seo={seo}>
      <div className="columns">
        <div className="column is-two-thirds" style={{ marginRight: '2rem' }}>
          <div className="blog_details">
            <header>
              <Img
                fluid={article.image.childImageSharp.fluid}
                style={{ maxHeight: '60vh' }}
              />
              <h1 style={({ marginTop: '1rem' }, { marginBottom: '.7rem' })}>
                {article.title}
              </h1>
              <h3 style={{ marginBottom: '1rem' }}>
                Published On: {article.publishedAt}
              </h3>
            </header>
            <p>{article.content}</p>
          </div>
        </div>
        <div className="column is-one-thirds">
          <SideScreen />
        </div>
      </div>
    </Layout>
  );
};

export default Article;
