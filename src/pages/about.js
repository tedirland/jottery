import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

function about({ data }) {
  return (
    <Layout>
      <Seo title="About" description="Learn more about codespace" />
      <h1>{process.env.BASE_URL}</h1>
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.site.siteMetadata.body.content}</h1>
    </Layout>
  );
}
export default about;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`;
