# GraphQL Gatsby → Directus

## Menu with all items

```graphql
fragment MenuItems on DirectusData_menu_items {
  title
  path
  id
}

query Menu {
  directus {
    menus(filter: { id: { _eq: 1 }, status: { _eq: "published" } }) {
      name
      items {
        menu_items_id(sort: ["sort"]) {
          ...MenuItems
          child_items {
            related_menu_items_id(sort: ["sort"]) {
              ...MenuItems
              child_items {
                related_menu_items_id {
                  ...MenuItems
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## Products with images

```graphql
query Products {
  directus {
    products {
      price
      id
      product_name
      slug
      product_image {
        id
        imageFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 1000)
          }
        }
      }
    }
  }
}
```
