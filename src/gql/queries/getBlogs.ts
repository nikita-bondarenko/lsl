import {gql} from "@apollo/client";

export const GET_BLOGS = gql(`
query GetBlogs {
  allBlog {
    nodes {
      id
      slug
      blog {
        blogPostTekst
        blogPostZagolovok
        blogPostImageKompyuter1x {
          sourceUrl
        }
        blogPostImageKompyuter2x {
          sourceUrl
        }
        blogPostImageTelefon1x {
          sourceUrl
        }
        blogPostImageTelefon2x {
          sourceUrl
        }
      }
      date
    }
  }
}
`)
