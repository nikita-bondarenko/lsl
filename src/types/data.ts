export interface Pokedex {
    data:       Data;
    extensions: Extensions;
}

export interface Data {
    pages:          Pages;
    commonSections: CommonSections;
    menu:           Menu;
    publications:   DataPublications;
    trainings:      Trainings;
    allBlog:        AllBlog;
}

export interface AllBlog {
    nodes: AllBlogNode[];
}

export interface AllBlogNode {
    id:   string;
    slug: string;
    blog: Blog;
    date: Date;
}

export interface Blog {
    blogPostTekst:            null;
    blogPostZagolovok:        null;
    blogPostImageKompyuter1x: BlogPostImageKompyuter1X;
    blogPostImageKompyuter2x: BlogPostImageKompyuter1X;
    blogPostImageTelefon1x:   BlogPostImageKompyuter1X;
    blogPostImageTelefon2x:   BlogPostImageKompyuter1X;
}

export interface BlogPostImageKompyuter1X {
    sourceUrl: string;
}

export interface CommonSections {
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

export interface Cookies {
    cookiesPolitikaKonfidenczialnosti: CookiesPolitikaKonfidenczialnosti | null;
}

export interface CookiesPolitikaKonfidenczialnosti {
    mediaItemUrl: string;
}

export interface Feedbacks {
    feedbacksPodzagolovok:  null | string;
    feedbacksZagolovok:     null | string;
    feedbacksImageSlajder:  FeedbacksImageSlajder[] | null;
    feedbacksSimpleSlajder: FeedbacksSimpleSlajder[] | null;
}

export interface FeedbacksImageSlajder {
    feedbacksImageKompyuter1x: BlogPostImageKompyuter1X;
    feedbacksImageKompyuter2x: BlogPostImageKompyuter1X;
    feedbacksImageTelefon1x:   BlogPostImageKompyuter1X;
    feedbacksImageTelefon2x:   BlogPostImageKompyuter1X;
}

export interface FeedbacksSimpleSlajder {
    feedbacksSimpleImya:            string;
    feedbacksSimpleOpisanieKlienta: string;
    feedbacksSimpleTekstOtzyva:     string;
    feedbacksSimpleKompyuter1x:     BlogPostImageKompyuter1X;
    feedbacksSimpleKompyuter2x:     BlogPostImageKompyuter1X;
    feedbacksSimpleTelefon1x:       BlogPostImageKompyuter1X;
    feedbacksSimpleTelefon2x:       BlogPostImageKompyuter1X;
}

export interface Footer {
    footerAdresSajta:                 null | string;
    footerKopirajt:                   null | string;
    footerSocialZagolovok:            null | string;
    footerContactsSpisok:             FooterContactsSpisok[] | null;
    footerLogotip:                    BlogPostImageKompyuter1X | null;
    footerLogotipMobile:              BlogPostImageKompyuter1X | null;
    footerPolitikaKonfidenczialnosti: CookiesPolitikaKonfidenczialnosti | null;
    footerPublichnayaOferta:          CookiesPolitikaKonfidenczialnosti | null;
    footerSocialSpisok:               FooterSocialSpisok[] | null;
    footerMenuZagolovok:              null | string;
    footerSocialRemarka:              null | string;
    footerContactsZagolovok:          null | string;
}

export interface FooterContactsSpisok {
    footerContactsEstKommentarij: string;
    footerContactsHref:           string;
    footerContactsKommentarij:    null | string;
    footerContactsTekst:          string;
}

export interface FooterSocialSpisok {
    footerSocialAdres:  string;
    footerSocialTekst:  string;
    footerSocialIkonka: BlogPostImageKompyuter1X;
}

export interface Header {
    headerAdresSajta:    null | string;
    headerTelefon:       null | string;
    headerLogotip:       BlogPostImageKompyuter1X | null;
    headerLogotipMobile: BlogPostImageKompyuter1X | null;
}

export interface Messenger {
    messengerPodzagolovok:     null | string;
    messengerSsylkaKnopki:     null | string;
    messengerTekstKnopki:      null | string;
    messengerZagolovok:        null | string;
    messengerTelefon:          null | string;
    messengerImageKompyuter1x: BlogPostImageKompyuter1X | null;
    messengerImageKompyuter2x: BlogPostImageKompyuter1X | null;
    messengerImageTelefon1x:   BlogPostImageKompyuter1X | null;
    messengerImageTelefon2x:   BlogPostImageKompyuter1X | null;
}

export interface OrderSteps {
    zagolovok: null | string;
    spisok:    Spisok[] | null;
}

export interface Spisok {
    adresSsylki:        null | string;
    estLiSsylkaVTekste: string;
    nomer:              string;
    tekst:              string;
    tekstSsylki:        null | string;
}

export interface Menu {
    menuItems: Items;
}

export interface MenuItemsNode {
    url:         string;
    label:       string;
    order:       number;
    childItems?: Items;
}

export interface Items {
    nodes: MenuItemsNode[];
}

export interface Pages {
    nodes: PagesNode[];
}

export interface PagesNode {
    slug:     string;
    metaData: MetaData;
    contacts: Contacts;
    main:     Main;
}

export interface Contacts {
    contactsPageTekstKnopki:  null | string;
    contactsPageZagolovok:    null | string;
    contactsPagePodzagolovok: null | string;
}

export interface Main {
    mainAboutTekst:                            null | string;
    mainAboutZagolovok:                        null | string;
    mainBlogAdresSsylki:                       null | string;
    mainBlogRemarka:                           null | string;
    mainBlogTekstSsylki:                       null | string;
    mainBlogZagolovok:                         null | string;
    mainHeroAdresSsylki:                       null | string;
    mainHeroMalyjTekst:                        null | string;
    mainHeroPodzagolovok:                      null | string;
    mainHeroTekst:                             null | string;
    mainHeroTekstSsylki:                       null | string;
    mainHeroZagolovok:                         null | string;
    mainSafetyPervyjTekst:                     null | string;
    mainSafetyVtorojTekst:                     null | string;
    mainSafetyZagolovok:                       null | string;
    mainSupportRemarka:                        null | string;
    mainSupportRemarkaVnizu:                   null | string;
    mainSupportTekst:                          null | string;
    mainSupportTekstKnopki:                    null | string;
    mainSupportZagolovok:                      null | string;
    mainTrainingAdresSsylki:                   null | string;
    mainTrainingTekstSsylki:                   null | string;
    mainTrainingZagolovok:                     null | string;
    mainValuesZagolovok:                       null | string;
    mainAboutImageKompyuter1x:                 BlogPostImageKompyuter1X | null;
    mainAboutImageKompyuter2x:                 BlogPostImageKompyuter1X | null;
    mainAboutImageTelefon1x:                   BlogPostImageKompyuter1X | null;
    mainAboutImageTelefon2x:                   BlogPostImageKompyuter1X | null;
    mainHeroSlajder:                           MainHeroSlajder[] | null;
    mainSupportSpisokVozmozhnyhPozhertvovanij: MainSupportSpisokVozmozhnyhPozhertvovanij[] | null;
    mainSafetyVideo:                           CookiesPolitikaKonfidenczialnosti | null;
    mainValuesSpisok:                          MainValuesSpisok[] | null;
}

export interface MainHeroSlajder {
    mainHeroSlajderKompyuter1x: BlogPostImageKompyuter1X;
    mainHeroSlajderKompyuter2x: BlogPostImageKompyuter1X;
    mainHeroSlajderTelefon1x:   BlogPostImageKompyuter1X;
    mainHeroSlajderTelefon2x:   BlogPostImageKompyuter1X;
}

export interface MainSupportSpisokVozmozhnyhPozhertvovanij {
    mainSupportSpisokSumma: number;
}

export interface MainValuesSpisok {
    mainValuesNomer: string;
    mainValuesTekst: string;
}

export interface MetaData {
    metaOpisanie:  null | string;
    metaZagolovok: string;
}

export interface DataPublications {
    nodes: PublicationsNode[];
}

export interface PublicationsNode {
    date:         Date;
    slug:         string;
    publications: NodePublications;
}

export interface NodePublications {
    publicationsKratkoeOpisanie:   string;
    publicationsNazvanie:          string;
    publicationsPodrobnoeOpisanie: null;
    publicationsAdresSsylki:       null | string;
    publicationsImageKompyuter1x:  BlogPostImageKompyuter1X;
    publicationsImageKompyuter2x:  BlogPostImageKompyuter1X;
    publicationsImageTelefon1x:    BlogPostImageKompyuter1X;
    publicationsImageTelefon2x:    BlogPostImageKompyuter1X;
}

export interface Trainings {
    nodes: TrainingsNode[];
}

export interface TrainingsNode {
    date:     Date;
    modified: Date;
    training: Training;
}

export interface Training {
    nazvanie:                  string;
    trainingCzena:             number;
    trainingKratkoeOpisanie:   string;
    trainingPodrobnoeOpisanie: null;
    trainingImageKompyuter1x:  BlogPostImageKompyuter1X;
    trainingImageKompyuter2x:  BlogPostImageKompyuter1X;
    trainingImageTelefon1x:    BlogPostImageKompyuter1X;
    trainingImageTelefon2x:    BlogPostImageKompyuter1X;
}

export interface Extensions {
    debug:         any[];
    queryAnalyzer: QueryAnalyzer;
}

export interface QueryAnalyzer {
    keys:             string;
    keysLength:       number;
    keysCount:        number;
    skippedKeys:      string;
    skippedKeysSize:  number;
    skippedKeysCount: number;
    skippedTypes:     any[];
}
