import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"
import ArticleItem from "../components/ArticleItem"
import ArticleListWrapper from "../components/ArticleListWrapper"
import ArticleListDivider from "../components/ArticleListDivider"
import { graphql } from "gatsby"

const ArticleList = props => {
  const articleList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <ArticleListWrapper>
        {articleList.map(
          (
            {
              node: {
                fields: { slug },
                frontmatter: { date, description, title },
                timeToRead,
              },
            },
            index
          ) => (
            <>
              <ArticleItem
                link={slug}
                title={title}
                description={description}
                time={`${date} - ${timeToRead} min read`}
                key={index}
              />
              <ArticleListDivider />
            </>
          )
        )}
      </ArticleListWrapper>
    </Layout>
  )
}

export default ArticleList

export const query = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
`
