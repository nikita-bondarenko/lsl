
import {gql} from '@apollo/client'

export const GET_COMMON_SECTIONS: any = gql(`
query GetCommonSections {
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
}
`)
