export interface Pokedex {
    data:       Data;
    extensions: Extensions;
}

export interface Data {
    allBlog:        AllBlog;
    pages:          Pages;
    commonSections: CommonSections;
    menu:           Menu;
    publications:   DataPublications;
    trainings:      DataTrainings;
}

export interface AllBlog {
    nodes: AllBlogNode[];
}

export interface AllBlogNode {
    id:   string;
    slug: string;
    date: Date;
    blog: Blog;
}

export interface Blog {
    blogPostContentTekst:                          null | string;
    blogPostHeroKratkoeOpisanie:                   string;
    blogPostHeroZagolovok:                         string;
    blogPostMediaTekstPodVideo:                    null | string;
    blogPostMediaTekstNadIzobrazheniem:            null | string;
    blogPostMediaVideo:                            BlogPostMediaVideo | null;
    blogPostMediaIzobrazhenieDlyaTelefonaX2:       BlogPostHeroImageKompyuter1X | null;
    blogPostMediaIzobrazhenieDlyaTelefonaX1:       BlogPostHeroImageKompyuter1X | null;
    blogPostMediaIzobrazhenieDlyaKompyuteraX2:     BlogPostHeroImageKompyuter1X | null;
    blogPostMediaIzobrazhenieDlyaKompyuteraX1:     BlogPostHeroImageKompyuter1X | null;
    blogPostHeroImageTelefon2x:                    BlogPostHeroImageKompyuter1X;
    blogPostHeroImageTelefon1x:                    BlogPostHeroImageKompyuter1X;
    blogPostHeroImageKompyuter2x:                  BlogPostHeroImageKompyuter1X;
    blogPostHeroImageKompyuter1x:                  BlogPostHeroImageKompyuter1X;
    blogPostPreviewIzobrazhenieDlyaKompyuteraX1:   BlogPostHeroImageKompyuter1X;
    blogPostPreviewIzobrazhenieDlyaKompyuteraX2:   BlogPostHeroImageKompyuter1X;
    blogPostPreviewIzobrazhenieDlyaTelefonaX1:     BlogPostHeroImageKompyuter1X;
    blogPostPreviewIzobrazhenieDlyaTelefonaX2:     BlogPostHeroImageKompyuter1X;
    blogPostMediaZastavkaDlyaVideoKompyuter:       BlogPostHeroImageKompyuter1X | null;
    blogPostMediaZastavkaDlyaVideoKompyuterKopiya: BlogPostHeroImageKompyuter1X | null;
}

export interface BlogPostHeroImageKompyuter1X {
    altText:   AltText;
    sourceUrl: string;
}

export enum AltText {
    Empty = "",
    ДевочкаВКрасномПлатье = "Девочка в красном платье",
    ЛогоWhatsapp = "Лого Whatsapp",
    ЛогоИнстаграм = "Лого Инстаграм",
    Логотип = "Логотип",
    МамаКати = "Мама Кати",
    СтатьяВЖурналеForbes = "Статья в журнале forbes",
    СтатьяВЖурналеМосквич = "Статья в журнале Москвич",
    СтатьяВЖурналеЯМогу = "Статья в журнале Я-могу",
    Телефон = "Телефон",
    ТренажерАхиллесоваСтупень = "Тренажер Ахиллесова ступень",
    ТренажерРастущийСтолИСтул = "Тренажер Растущий стол и стул",
    ТренажерСтульчикШведскаяСтенка = "Тренажер Стульчик шведская стенка",
    ТренажерСтупенька = "Тренажер Ступенька",
    ТренажерТабуретНаКолесиках = "Тренажер Табурет на колесиках",
}

export interface BlogPostMediaVideo {
    mediaItemUrl: string;
    sourceUrl:    null;
    altText:      string;
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
    online:     Online;
    support:    Support;
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
    feedbacksPodzagolovok1: null | string;
    feedbacksZagolovok1:    null | string;
    feedbacksZagolovok2:    null | string;
    feedbacksImageSlajder:  FeedbacksImageSlajder[] | null;
    feedbacksSimpleSlajder: FeedbacksSimpleSlajder[] | null;
}

export interface FeedbacksImageSlajder {
    feedbacksImageKompyuter1x: BlogPostHeroImageKompyuter1X;
    feedbacksImageKompyuter2x: BlogPostHeroImageKompyuter1X;
    feedbacksImageTelefon1x:   BlogPostHeroImageKompyuter1X;
    feedbacksImageTelefon2x:   BlogPostHeroImageKompyuter1X;
}

export interface FeedbacksSimpleSlajder {
    feedbacksSimpleImya:            string;
    feedbacksSimpleOpisanieKlienta: string;
    feedbacksSimpleTekstOtzyva:     string;
    feedbacksSimpleKompyuter1x:     BlogPostHeroImageKompyuter1X;
    feedbacksSimpleKompyuter2x:     BlogPostHeroImageKompyuter1X;
    feedbacksSimpleTelefon1x:       BlogPostHeroImageKompyuter1X;
    feedbacksSimpleTelefon2x:       BlogPostHeroImageKompyuter1X;
}

export interface Footer {
    footerAdresSajta:                 null | string;
    footerKopirajt:                   null | string;
    footerSocialZagolovok:            null | string;
    footerContactsSpisok:             FooterContactsSpisok[] | null;
    footerLogotip:                    BlogPostHeroImageKompyuter1X | null;
    footerLogotipMobile:              BlogPostHeroImageKompyuter1X | null;
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
    footerSocialIkonka: BlogPostHeroImageKompyuter1X;
}

export interface Header {
    headerAdresSajta:    null | string;
    headerTelefon:       null | string;
    headerLogotip:       BlogPostHeroImageKompyuter1X | null;
    headerLogotipMobile: BlogPostHeroImageKompyuter1X | null;
}

export interface Messenger {
    messengerPodzagolovok:     null | string;
    messengerSsylkaKnopki:     null | string;
    messengerTekstKnopki:      null | string;
    messengerZagolovok:        null | string;
    messengerTelefon:          null | string;
    messengerImageKompyuter1x: BlogPostHeroImageKompyuter1X | null;
    messengerImageKompyuter2x: BlogPostHeroImageKompyuter1X | null;
    messengerImageTelefon1x:   BlogPostHeroImageKompyuter1X | null;
    messengerImageTelefon2x:   BlogPostHeroImageKompyuter1X | null;
}

export interface Online {
    onlineTekst:       null | string;
    onlineTekstKnopki: null | string;
    onlineZagolovok:   null | string;
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

export interface Support {
    supportAdresSsylki:      null;
    supportTekst:            null | string;
    supportTekstSsylki:      null | string;
    supportZagolovok:        null | string;
    supportImageKompyuterX1: BlogPostHeroImageKompyuter1X | null;
    supportImageKompyuterX2: BlogPostHeroImageKompyuter1X | null;
    supportImageTelefonX1:   BlogPostHeroImageKompyuter1X | null;
    supportImageTelefonX2:   BlogPostHeroImageKompyuter1X | null;
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
    slug:      string;
    metaData:  MetaData;
    contacts:  Contacts;
    main:      Main;
    history:   History;
    blogPage:  BlogPage;
    trainings: NodeTrainings;
}

export interface BlogPage {
    blogZagolovok: null | string;
}

export interface Contacts {
    contactsPageTekstKnopki:  null | string;
    contactsPageZagolovok:    null | string;
    contactsPagePodzagolovok: null | string;
}

export interface History {
    historyFindTrainingAdresSsylki:           null | string;
    historyFindTrainingTekst:                 null | string;
    historyFindTrainingTekstSsylki:           null | string;
    historyHeroBolshojTekst:                  null | string;
    historyHeroMalyjTekst:                    null | string;
    historyHistoryZagolovok:                  null | string;
    historyProjectsTekst:                     null | string;
    historyProjectsZagolovok:                 null | string;
    historySendedKoneczPervojStroki:          null | string;
    historySendedKoneczVtorojStroki:          null | string;
    historySendedNachaloPervojStroki:         null | string;
    historySendedTretyaStroka:                null | string;
    historySendedVydelennyjTekstPervojStroki: null | string;
    historySendedVydelennyjTekstVtorojStroki: null | string;
    historyWeCzitata:                         null | string;
    historyWeTekstSverhu:                     null | string;
    historyWeTekstVnizu:                      null | string;
    historyWeZagolovok:                       null | string;
    historyHistoryList:                       HistoryHistoryList[] | null;
    historyHeroImageKompyuterX1:              BlogPostHeroImageKompyuter1X | null;
    historyHeroImageKompyuterX2:              BlogPostHeroImageKompyuter1X | null;
    historyHeroImageTelefonX1:                BlogPostHeroImageKompyuter1X | null;
    historyHeroImageTelefonX2:                HistoryHeroImageTelefonX2 | null;
    historyProjectsSpisok:                    HistoryProjectsSpisok[] | null;
    historySendedGoroda:                      HistorySendedGoroda[] | null;
    historyWeFirstImageKompyuterX1:           BlogPostHeroImageKompyuter1X | null;
    historyWeFirstImageKompyuterX2:           BlogPostHeroImageKompyuter1X | null;
    historyWeFirstImageTelefonX1:             BlogPostHeroImageKompyuter1X | null;
    historyWeFirstImageTelefonX2:             BlogPostHeroImageKompyuter1X | null;
    historyWeSecondImageKompyuterX1:          BlogPostHeroImageKompyuter1X | null;
    historyWeSecondImageKompyuterX2:          BlogPostHeroImageKompyuter1X | null;
    historyWeSecondImageTelefonX1:            BlogPostHeroImageKompyuter1X | null;
    historyWeSecondImageTelefonX2:            BlogPostHeroImageKompyuter1X | null;
}

export interface HistoryHeroImageTelefonX2 {
    sourceUrl: string;
}

export interface HistoryHistoryList {
    god:   string;
    tekst: string;
}

export interface HistoryProjectsSpisok {
    kompyuterX1: BlogPostHeroImageKompyuter1X;
    kompyuterX2: BlogPostHeroImageKompyuter1X;
    telefonX1:   BlogPostHeroImageKompyuter1X;
    telefonX2:   BlogPostHeroImageKompyuter1X;
}

export interface HistorySendedGoroda {
    strokaGorodov: StrokaGorodov[];
}

export interface StrokaGorodov {
    nazvanieGoroda: string;
    izobrazhenie:   BlogPostHeroImageKompyuter1X;
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
    mainSafetyThirdTekst:                      null | string;
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
    mainAboutImageKompyuter1x:                 BlogPostHeroImageKompyuter1X | null;
    mainAboutImageKompyuter2x:                 BlogPostHeroImageKompyuter1X | null;
    mainAboutImageTelefon1x:                   BlogPostHeroImageKompyuter1X | null;
    mainAboutImageTelefon2x:                   BlogPostHeroImageKompyuter1X | null;
    mainHeroSlajder:                           MainHeroSlajder[] | null;
    mainSupportSpisokVozmozhnyhPozhertvovanij: MainSupportSpisokVozmozhnyhPozhertvovanij[] | null;
    mainSafetyVideo:                           CookiesPolitikaKonfidenczialnosti | null;
    mainValuesSpisok:                          MainValuesSpisok[] | null;
}

export interface MainHeroSlajder {
    mainHeroSlajderKompyuter1x: BlogPostHeroImageKompyuter1X;
    mainHeroSlajderKompyuter2x: BlogPostHeroImageKompyuter1X;
    mainHeroSlajderTelefon1x:   BlogPostHeroImageKompyuter1X;
    mainHeroSlajderTelefon2x:   BlogPostHeroImageKompyuter1X;
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

export interface NodeTrainings {
    trainingsAboutTekst:                       null | string;
    trainingsDeliveryZagolovok:                null | string;
    trainingsGiftTekst:                        null | string;
    trainingsHeroPodzagolovok:                 null | string;
    trainingsHeroZagolovok:                    null | string;
    trainingsSelectPodzagolovok:               null | string;
    trainingsSelectZagolovok:                  null | string;
    trainingsAdvantagesSpisok:                 TrainingsAdvantagesSpisok[] | null;
    trainingsDeliverySpisok:                   TrainingsDeliverySpisok[] | null;
    trainingsGiftIzobrazhenieDlyaKompyuteraX1: BlogPostHeroImageKompyuter1X | null;
    trainingsGiftIzobrazhenieDlyaKompyuteraX2: BlogPostHeroImageKompyuter1X | null;
    trainingsGiftIzobrazhenieDlyaTelefonaX1:   BlogPostHeroImageKompyuter1X | null;
    trainingsGiftIzobrazhenieDlyaTelefonaX2:   BlogPostHeroImageKompyuter1X | null;
    trainingsHeroIzobrazhenieDlyaKompyuteraX1: BlogPostHeroImageKompyuter1X | null;
    trainingsHeroIzobrazhenieDlyaKompyuteraX2: BlogPostHeroImageKompyuter1X | null;
    trainingsHeroIzobrazhenieDlyaTelefonaX1:   BlogPostHeroImageKompyuter1X | null;
    trainingsHeroIzobrazhenieDlyaTelefonaX2:   BlogPostHeroImageKompyuter1X | null;
    trainingsAboutZagolovok:                   null | string;
    trainingsAboutIzobrazhenieDlyaKompyutera:  BlogPostHeroImageKompyuter1X | null;
    trainingsAboutIzobrazhenieDlyaPlansheta:   BlogPostHeroImageKompyuter1X | null;
    trainingsAboutIzobrazhenieDlyaTelefona:    BlogPostHeroImageKompyuter1X | null;
}

export interface TrainingsAdvantagesSpisok {
    tekst:     string;
    zagolovok: string;
    dekor:     BlogPostHeroImageKompyuter1X;
}

export interface TrainingsDeliverySpisok {
    tekst: string;
    dekor: BlogPostHeroImageKompyuter1X;
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
    publicationsAdresSsylki:       string;
    publicationsImageKompyuter1x:  BlogPostHeroImageKompyuter1X;
    publicationsImageKompyuter2x:  BlogPostHeroImageKompyuter1X;
    publicationsImageTelefon1x:    BlogPostHeroImageKompyuter1X;
    publicationsImageTelefon2x:    BlogPostHeroImageKompyuter1X;
}

export interface DataTrainings {
    nodes: TrainingsNode[];
}

export interface TrainingsNode {
    date:     Date;
    modified: Date;
    training: Training;
}

export interface Training {
    nazvanie:                  string;
    trainingCzena:             null | string;
    trainingKratkoeOpisanie:   string;
    trainingPodrobnoeOpisanie: null;
    trainingImageKompyuter1x:  BlogPostHeroImageKompyuter1X;
    trainingImageKompyuter2x:  BlogPostHeroImageKompyuter1X;
    trainingImageTelefon1x:    BlogPostHeroImageKompyuter1X;
    trainingImageTelefon2x:    BlogPostHeroImageKompyuter1X;
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
