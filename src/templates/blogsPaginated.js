import React from 'react';
import Layout from '../components/Layout';
import BlogListing from '../components/BlogListing';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';

export default function blogsPaginated({
  data,
  pageContext: { currentPage, numOfPages },
}) {
  const { nodes } = data.allMarkdownRemark;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;

  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <Seo
        title="Community Posts"
        description="All the cuck that's fit to rake"
      />
      <BlogListing blogs={nodes} />

      <Link
        className="button is-small mx-2"
        disabled={isFirst}
        to={`/blogs/${prevPage}`}
        rel="prev"
      >
        Previous
      </Link>

      <Link
        className="button is-small"
        disabled={isLast}
        to={`/blogs/${nextPage}`}
        rel="next"
      >
        Next
      </Link>
    </Layout>
  );
}

export const query = graphql`
  query BlogPaginationQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          subtitle
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
