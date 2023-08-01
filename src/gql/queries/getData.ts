import {gql} from "@apollo/client";

export const DATA = gql(`
query Data {
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
  pages {
    nodes {
      slug
    metaData {
      metaOpisanie
      metaZagolovok
    }
    contacts {
      contactsPageTekstKnopki
      contactsPageZagolovok
      contactsPagePodzagolovok
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
  commonSections {
    nodes {
      slug
      cookies {
        cookiesPolitikaKonfidenczialnosti {
          mediaItemUrl
        }
      }
      feedbacks {
          feedbacksPodzagolovok
        feedbacksZagolovok
            feedbacksPodzagolovok1
        feedbacksZagolovok1
        feedbacksZagolovok2
        feedbacksImageSlajder {
          feedbacksImageKompyuter1x {
            sourceUrl
          }
          feedbacksImageKompyuter2x {
            sourceUrl
          }
          feedbacksImageTelefon1x {
            sourceUrl
          }
          feedbacksImageTelefon2x {
            sourceUrl
          }
        }
        feedbacksSimpleSlajder {
          feedbacksSimpleImya
          feedbacksSimpleOpisanieKlienta
          feedbacksSimpleTekstOtzyva
          feedbacksSimpleKompyuter1x {
            sourceUrl
          }
          feedbacksSimpleKompyuter2x {
            sourceUrl
          }
          feedbacksSimpleTelefon1x {
            sourceUrl
          }
          feedbacksSimpleTelefon2x {
            sourceUrl
          }
        }
      }
      footer {
        footerAdresSajta
        footerKopirajt
        footerSocialZagolovok
        footerContactsSpisok {
          footerContactsEstKommentarij
          footerContactsHref
          footerContactsKommentarij
          footerContactsTekst
        }
        footerLogotip {
          sourceUrl
        }
        footerLogotipMobile {
          sourceUrl
        }
        footerPolitikaKonfidenczialnosti {
          mediaItemUrl
        }
        footerPublichnayaOferta {
          mediaItemUrl
        }
        footerSocialSpisok {
          footerSocialAdres
          footerSocialTekst
          footerSocialIkonka {
            sourceUrl
          }
        }
        footerMenuZagolovok
        footerSocialRemarka
        footerContactsZagolovok
      }
      header {
        headerAdresSajta
        headerTelefon
        headerLogotip {
          sourceUrl
        }
        headerLogotipMobile {
          sourceUrl
        }
      }
      messenger {
        messengerPodzagolovok
        messengerSsylkaKnopki
        messengerTekstKnopki
        messengerZagolovok
        messengerTelefon
        messengerImageKompyuter1x {
          sourceUrl
        }
        messengerImageKompyuter2x {
          sourceUrl
        }
        messengerImageTelefon1x {
          sourceUrl
        }
        messengerImageTelefon2x {
          sourceUrl
        }
      }
      orderSteps {
        zagolovok
        spisok {
          adresSsylki
          estLiSsylkaVTekste
          nomer
          tekst
          tekstSsylki
        }
      }
    }
  }
   
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
`)
