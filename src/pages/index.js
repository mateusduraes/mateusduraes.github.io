import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ArticleList from "../components/ArticleList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleList />
  </Layout>
)

export default IndexPage
