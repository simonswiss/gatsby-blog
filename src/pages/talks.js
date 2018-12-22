import React from 'react'
import { css } from 'emotion'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Teaser from '../components/Teaser'

export default props => {
  const talks = props.data.allMdx.edges
  const talksList = talks.map(post => {
    const { node } = post
    return (
      <Teaser
        type="talks"
        key={node.id}
        title={node.frontmatter.title}
        path={node.frontmatter.path}
        intro={node.frontmatter.intro}
        postdate={node.frontmatter.postdate}
      />
    )
  })
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content:
              "Tech talks presented at conferences and meetups. I want to do more of this. Like my style and want me to speak at your event? Let's talk! :)",
          },
        ]}
        title="Public speaking: Tech meetup and conference talks | simonswiss.com"
      />
      <article>
        <div className="cms">
          <ul className={css(tw`list-reset`)}>{talksList}</ul>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
      sort: { order: DESC, fields: [frontmatter___postdate] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            postdate
            intro
          }
        }
      }
    }
  }
`