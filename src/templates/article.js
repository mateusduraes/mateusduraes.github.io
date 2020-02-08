import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const ArticleTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  text-align: center;
`

const ArticleDate = styled.time`
  font-weight: 300;
  color: #a0a0a0;
  font-size: 12px;
  text-transform: uppercase;
  display: block;
  text-align: center;
`

const ArticleWrapper = styled.div`
  padding: 5rem 5rem 0;
`

const Article = props => {
  const article = props.data.markdownRemark

  return (
    <Layout>
      <ArticleTitle>{article.frontmatter.title}</ArticleTitle>
      <ArticleDate>{article.frontmatter.date}</ArticleDate>
      <ArticleWrapper>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </ArticleWrapper>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "en", formatString: "YYYY[,] MMMM DD")
        description
        title
      }
    }
  }
`
