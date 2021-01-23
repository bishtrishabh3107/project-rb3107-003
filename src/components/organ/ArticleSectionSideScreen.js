import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';

function ArticleSectionSideScreen() {
  return (
    <div className="sideScreen_ArticleSection">
      <StaticQuery
        query={articleSectionSideScreen}
        render={(data) => {
          return (
            <div className="articleSectionSideScreen">
              {data.allStrapiArticle.edges.map(({ node }) => (
                <div key={node.id}>
                  <Link to={`/articles/${node.slug}`}>
                    <Img fluid={node.image.childImageSharp.fluid} />
                    <h1>{node.title}</h1>
                  </Link>
                  <h3 style={{ marginBottom: '1rem' }}>
                    Published On: {node.publishedAt}
                  </h3>
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}

export default ArticleSectionSideScreen;

const articleSectionSideScreen = graphql`
  {
    allStrapiArticle(sort: { fields: publishedAt, order: DESC }, limit: 2) {
      edges {
        node {
          id
          title
          slug
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
    }
  }
`;
