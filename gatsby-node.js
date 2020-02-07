const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
// Add slug
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

// Create articles pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "en", formatString: "YYYY[,] MMMM DD")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const articles = result.data.allMarkdownRemark.edges
    // Each article page creation
    articles.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Pagination
    const articlesPerPage = 8
    const numPages = Math.ceil(articles.length / articlesPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/page/${i + 1}`,
        component: path.resolve("./src/templates/article-list.js"),
        context: {
          limit: articlesPerPage,
          skip: i * articlesPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
