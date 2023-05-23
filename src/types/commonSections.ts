export interface CommonSectionsQuery {
   commonSections: CommonSections;
}

 interface CommonSections {
   nodes: CommonSectionsNode[];
}

 export interface CommonSectionsNode {
   slug:       string;
   cookies:    Cookies;
   feedbacks:  Feedbacks;
   footer:     Footer;
   header:     Header;
   messenger:  Messenger;
   orderSteps: OrderSteps;
}

 interface Cookies {
   cookiesPolitikaKonfidenczialnosti: CookiesPolitikaKonfidenczialnosti | null;
}

 interface CookiesPolitikaKonfidenczialnosti {
   mediaItemUrl: string;
}

 interface Feedbacks {
   feedbacksPodzagolovok:  null | string;
   feedbacksZagolovok:     null | string;
   feedbacksImageSlajder:  FeedbacksImageSlajder[] | null;
   feedbacksSimpleSlajder: FeedbacksSimpleSlajder[] | null;
}

 interface FeedbacksImageSlajder {
   feedbacksImageKompyuter1x: FooterLogotip;
   feedbacksImageKompyuter2x: FooterLogotip;
   feedbacksImageTelefon1x:   FooterLogotip;
   feedbacksImageTelefon2x:   FooterLogotip;
}

 interface FooterLogotip {
   sourceUrl: string;
}

 interface FeedbacksSimpleSlajder {
   feedbacksSimpleImya:            string;
   feedbacksSimpleOpisanieKlienta: string;
   feedbacksSimpleTekstOtzyva:     string;
   feedbacksSimpleKompyuter1x:     FooterLogotip;
   feedbacksSimpleKompyuter2x:     FooterLogotip;
   feedbacksSimpleTelefon1x:       FooterLogotip;
   feedbacksSimpleTelefon2x:       FooterLogotip;
}

 interface Footer {
   footerAdresSajta:                 null | string;
   footerKopirajt:                   null | string;
   footerSocialZagolovok:            null | string;

     footerContactsZagolovok: null | string;
   footerContactsSpisok:             FooterContactsSpisok[] | null;
   footerLogotip:                    FooterLogotip | null;
   footerLogotipMobile:              FooterLogotip | null;
   footerPolitikaKonfidenczialnosti: CookiesPolitikaKonfidenczialnosti | null;
   footerPublichnayaOferta:          CookiesPolitikaKonfidenczialnosti | null;
   footerSocialSpisok:               FooterSocialSpisok[] | null;
   footerMenuZagolovok:              null | string;
   footerSocialRemarka:              null;
}

 interface FooterContactsSpisok {
   footerContactsEstKommentarij: string;
   footerContactsHref:           string;
   footerContactsKommentarij:    null | string;
   footerContactsTekst:          string;
}

 interface FooterSocialSpisok {
   footerSocialAdres:  string;
   footerSocialTekst:  string;
   footerSocialIkonka: FooterLogotip;
}

 interface Header {
   headerAdresSajta:    null | string;
   headerTelefon:       null | string;
   headerLogotip:       FooterLogotip | null;
   headerLogotipMobile: FooterLogotip | null;
}

 interface Messenger {
   messengerPodzagolovok:     null | string;
   messengerSsylkaKnopki:     null | string;
   messengerTekstKnopki:      null | string;
   messengerZagolovok:        null | string;
   messengerImageKompyuter1x: FooterLogotip | null;
   messengerImageKompyuter2x: FooterLogotip | null;
   messengerImageTelefon1x:   FooterLogotip | null;
   messengerImageTelefon2x:   FooterLogotip | null;
}

 interface OrderSteps {
   zagolovok: null | string;
   spisok:    Spisok[] | null;
}

 interface Spisok {
   adresSsylki:        null | string;
   estLiSsylkaVTekste: string;
   nomer:              string;
   tekst:              string;
   tekstSsylki:        null | string;
}
