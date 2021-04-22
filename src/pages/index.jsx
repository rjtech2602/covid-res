import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Covid Resources for all States and Union Territories of India"
        description="There is a continuing rise in the number of patients affected by Coronavirus in India. the second wave of coronavirus is absolutely devastating and the only way to battle is to share the resources.<br><b> United we stand, Divided we fall </b><br> This website is an effort towards bringing all the resources available for figting CoVid in all States and Union Territories of India "
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#StaySafe"
        title="Covid Resources"
        description="There is a continuing rise in the number of patients affected by Coronavirus in India. the second wave of coronavirus is absolutely devastating and the only way to battle is to share the resources.<br><b> United we stand, Divided we fall </b><br> This website is an effort towards bringing all the resources available for figting CoVid in all States and Union Territories of India."
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
