import { gql } from "@apollo/client";
export const getMenu = gql(`
query Menu {
  menu(id: "dGVybToxOQ==") {
    menuItems(where: {parentDatabaseId: 0}) {
      nodes {
        url
        label
        order
        childItems {
          nodes {
            label
            order
            url
          }
        }
      }
    }
  }
}
`);
