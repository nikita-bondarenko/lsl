import {gql} from "@apollo/client";

export const MAIN_PAGE = gql(`
query MainPage {
  page(id: "cG9zdDoxMg==") {
    metaData {
      metaOpisanie
      metaZagolovok
    }
    main {
      mainAboutTekst
      mainAboutZagolovok
      mainBlogAdresSsylki
      mainBlogRemarka
      mainBlogTekstSsylki
      mainBlogZagolovok
      mainHeroAdresSsylki
      mainHeroMalyjTekst
      mainHeroPodzagolovok
      mainHeroTekst
      mainHeroTekstSsylki
      mainHeroZagolovok
      mainSafetyPervyjTekst
      mainSafetyVtorojTekst
      mainSafetyZagolovok
      mainSupportRemarka
      mainSupportRemarkaVnizu
      mainSupportTekst
      mainSupportTekstKnopki
      mainSupportZagolovok
      mainTrainingAdresSsylki
      mainTrainingTekstSsylki
      mainTrainingZagolovok
      mainValuesZagolovok
      mainAboutImageKompyuter1x {
        sourceUrl
      }
      mainAboutImageKompyuter2x {
        sourceUrl
      }
      mainAboutImageTelefon1x {
        sourceUrl
      }
      mainAboutImageTelefon2x {
        sourceUrl
      }
      mainHeroSlajder {
        mainHeroSlajderKompyuter1x {
          sourceUrl
        }
        mainHeroSlajderKompyuter2x {
          sourceUrl
        }
        mainHeroSlajderTelefon1x {
          sourceUrl
        }
        mainHeroSlajderTelefon2x {
          sourceUrl
        }
      }
      mainSupportSpisokVozmozhnyhPozhertvovanij {
        mainSupportSpisokSumma
      }
       mainSafetyVideo {
        mediaItemUrl
      }
      mainValuesSpisok {
        mainValuesNomer
        mainValuesTekst
      }
    }
  }
}
`)
