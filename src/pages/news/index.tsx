import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href='/news/example'>Example</Link>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
