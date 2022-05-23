import * as React from "react";
import type { PageProps } from "gatsby";

type CategoryPageContext = {
  id: string;
  slug: string;
  name: string;
};
type CategoryPageProps = PageProps<{}, CategoryPageContext>;

const CategoryTemplate = ({ pageContext }: CategoryPageProps) => {
  return (
    <>
      <h1>{pageContext.name}</h1>
    </>
  );
};

export default CategoryTemplate;
