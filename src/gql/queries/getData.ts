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
          altText
        }
        blogPostImageKompyuter2x {
          sourceUrl
          altText
        }
        blogPostImageTelefon1x {
          sourceUrl
          altText
        }
        blogPostImageTelefon2x {
          sourceUrl
          altText
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
      mainSafetyThirdTekst
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
        altText
      }
      mainAboutImageKompyuter2x {
        sourceUrl
        altText
      }
      mainAboutImageTelefon1x {
        sourceUrl
        altText
      }
      mainAboutImageTelefon2x {
        sourceUrl
        altText
      }
      mainHeroSlajder {
        mainHeroSlajderKompyuter1x {
          sourceUrl
          altText
        }
        mainHeroSlajderKompyuter2x {
          sourceUrl
          altText
        }
        mainHeroSlajderTelefon1x {
          sourceUrl
          altText
        }
        mainHeroSlajderTelefon2x {
          sourceUrl
          altText
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
            altText
          }
          feedbacksImageKompyuter2x {
            sourceUrl
            altText
          }
          feedbacksImageTelefon1x {
            sourceUrl
            altText
          }
          feedbacksImageTelefon2x {
            sourceUrl
            altText
          }
        }
        feedbacksSimpleSlajder {
          feedbacksSimpleImya
          feedbacksSimpleOpisanieKlienta
          feedbacksSimpleTekstOtzyva
          feedbacksSimpleKompyuter1x {
            sourceUrl
            altText
          }
          feedbacksSimpleKompyuter2x {
            sourceUrl
            altText
          }
          feedbacksSimpleTelefon1x {
            sourceUrl
            altText
          }
          feedbacksSimpleTelefon2x {
            sourceUrl
            altText
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
          altText
        }
        footerLogotipMobile {
          sourceUrl
          altText
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
            altText
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
          altText
        }
        headerLogotipMobile {
          sourceUrl
          altText
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
          altText
        }
        messengerImageKompyuter2x {
          sourceUrl
          altText
        }
        messengerImageTelefon1x {
          sourceUrl
          altText
        }
        messengerImageTelefon2x {
          sourceUrl
          altText
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
          altText
        }
        publicationsImageKompyuter2x {
          sourceUrl
          altText
        }
        publicationsImageTelefon1x {
          sourceUrl
          altText
        }
        publicationsImageTelefon2x {
          sourceUrl
          altText
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
          altText
        }
        trainingImageKompyuter2x {
          sourceUrl
          altText
        }
        trainingImageTelefon1x {
          sourceUrl
          altText
        }
        trainingImageTelefon2x {
          sourceUrl
          altText
        }
      }
    }
  }
}
`)
