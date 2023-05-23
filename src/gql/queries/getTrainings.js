import { gql } from "@apollo/client";
export const GET_TRAININGS = gql(`
query GetTrainings {
  trainings {
    nodes {
      date
      modified
      training {
        nazvanie
        trainingCzena
        trainingKratkoeOpisanie
        trainingPodrobnoeOpisanie
        trainingImageKompyuter1x {
          sourceUrl
        }
        trainingImageKompyuter2x {
          sourceUrl
        }
        trainingImageTelefon1x {
          sourceUrl
        }
        trainingImageTelefon2x {
          sourceUrl
        }
      }
    }
  }
}
`);
