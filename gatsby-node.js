const { slugify } = require('./src/assets/utilityFunctions');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              id
              slug
            }
          }
        }
        products: allStrapiProduct {
          edges {
            node {
              id
              productFamily
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges;
  const products = result.data.products.edges;

  const ArticleTemplate = require.resolve('./src/templates/articleTemplate.js');

  articles.forEach((article, index) => {
    createPage({
      path: `/articles/${article.node.slug}`,
      component: ArticleTemplate,
      context: {
        slug: article.node.slug,
      },
    });
  });

  const ProductTemplate = require.resolve('./src/templates/productTemplate.js');

  products.forEach((product, index) => {
    createPage({
      path: `/products/${slugify(product.node.productFamily)}`,
      component: ProductTemplate,
      context: {
        productFamily: product.node.productFamily,
      },
    });
  });
};
