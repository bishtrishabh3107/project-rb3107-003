import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ArticleCard from '../components/organ/ArticleCard';
import Layout from '../components/Global/Layout';
import SideScreen from '../components/organism/SideScreen';

function article() {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-two-thirds" style={{ marginRight: '.5rem' }}>
          <div className="article">
            <StaticQuery
              query={articlePageQuery}
              render={(data) => {
                return (
                  <div>
                    {data.allStrapiArticle.edges.map(({ node }) => (
                      <ArticleCard
                        key={node.id}
                        title={node.title}
                        slug={node.slug}
                        date={node.publishedAt}
                        description={node.description}
                        fluid={node.image.childImageSharp.fluid}
                      />
                    ))}
                  </div>
                );
              }}
            />
          </div>
        </div>
        <div className="column is-one-thirds">
          <SideScreen />
        </div>
      </div>
    </Layout>
  );
}

export default article;

const articlePageQuery = graphql`
  query article {
    allStrapiArticle(
      sort: { fields: publishedAt, order: DESC }
      filter: { status: { eq: "published" } }
      limit: 8
    ) {
      edges {
        node {
          id
          title
          slug
          publishedAt(formatString: "DD MM YYYY")
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
    }
  }
`;
