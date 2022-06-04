# GraphQL

## Get products by category link

```graphql
query MyQuery {
  allWpProduct(
    filter: {
      productCategories: {
        nodes: { elemMatch: { link: { eq: "/product-category/konsole/" } } }
      }
    }
  ) {
    nodes {
      date
    }
  }
}
```

```graphql
query NewProducts {
  allWpSimpleProduct(limit: 10, sort: { fields: date, order: DESC }) {
    edges {
      node {
        name
        link
        onSale
        featured
        productFields {
          croppedThumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 85, placeholder: BLURRED, width: 1000)
              }
            }
          }
        }
        purchasable
        regularPrice
        salePrice
        stockStatus
      }
    }
  }
}
```
