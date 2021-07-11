import React from 'react';
import Blog from './Blog';

export default function BlogListing({ blogs, search: Search }) {
  return (
    <>
      {Search && (
        <div className="mb-4">
          {' '}
          <Search />
        </div>
      )}
      <div className="columns is-multiline">
        {blogs.map(({ id, frontmatter: { title, subtitle, slug, date } }) => (
          <div key={id} className="column is-9">
            <Blog title={title} subtitle={subtitle} slug={slug} date={date} />
          </div>
        ))}
      </div>
    </>
  );
}
