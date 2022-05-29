# GraphQL


## Get products by category link

```graphql
query MyQuery {
  allWpProduct(
    filter: {productCategories: {nodes: {elemMatch: {link: {eq: "/product-category/konsole/"}}}}}
  ) {
    nodes {
      date
    }
  }
}
```