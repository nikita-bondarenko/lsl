import { gql } from "@apollo/client";
export const GET_PUBLICATIONS = gql(`
query GetPublications {
  publications {
    nodes {
      date
      slug
      publications {
        publicationsKratkoeOpisanie
        publicationsNazvanie
        publicationsPodrobnoeOpisanie
        publicationsAdresSsylki
        publicationsImageKompyuter1x {
          sourceUrl
        }
        publicationsImageKompyuter2x {
          sourceUrl
        }
        publicationsImageTelefon1x {
          sourceUrl
        }
        publicationsImageTelefon2x {
          sourceUrl
        }
      }
    }
  }
}
`);
