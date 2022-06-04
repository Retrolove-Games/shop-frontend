import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <h1>Content</h1>
    </>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
