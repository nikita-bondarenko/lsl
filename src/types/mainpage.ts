
 export interface MainPageQuery {
    page: Page;
}

 interface Page {
    metaData: MetaData;
    main:     Main;
}

 interface Main {
    mainAboutTekst:                            string;
    mainAboutZagolovok:                        string;
    mainBlogAdresSsylki:                       string;
    mainBlogRemarka:                           string;
    mainBlogTekstSsylki:                       string;
    mainBlogZagolovok:                         string;
    mainHeroAdresSsylki:                       string;
    mainHeroMalyjTekst:                        string;
    mainHeroPodzagolovok:                      string;
    mainHeroTekst:                             string;
    mainHeroTekstSsylki:                       string;
    mainHeroZagolovok:                         string;
    mainSafetyPervyjTekst:                     string;
    mainSafetyVtorojTekst:                     string;
    mainSafetyZagolovok:                       string;
    mainSupportRemarka:                        string;
    mainSupportRemarkaVnizu:                   string;
    mainSupportTekst:                          string;
    mainSupportTekstKnopki:                    string;
    mainSupportZagolovok:                      string;
    mainTrainingAdresSsylki:                   string;
    mainTrainingTekstSsylki:                   string;
    mainTrainingZagolovok:                     string;
    mainValuesZagolovok:                       string;
    mainAboutImageKompyuter1x:                 MainAboutImageKompyuter1XClass;
    mainAboutImageKompyuter2x:                 MainAboutImageKompyuter1XClass;
    mainAboutImageTelefon1x:                   MainAboutImageKompyuter1XClass;
    mainAboutImageTelefon2x:                   MainAboutImageKompyuter1XClass;
    mainHeroSlajder:                           MainHeroSlajder[];
    mainSupportSpisokVozmozhnyhPozhertvovanij: MainSupportSpisokVozmozhnyhPozhertvovanij[];
    mainSafetyVideo:                           {
       mediaItemUrl: string
    }
    mainValuesSpisok:                          MainValuesSpisok[];
}

 interface MainAboutImageKompyuter1XClass {
    sourceUrl: string;
}

 interface MainHeroSlajder {
    mainHeroSlajderKompyuter1x: MainAboutImageKompyuter1XClass;
    mainHeroSlajderKompyuter2x: MainAboutImageKompyuter1XClass;
    mainHeroSlajderTelefon1x:   MainAboutImageKompyuter1XClass;
    mainHeroSlajderTelefon2x:   MainAboutImageKompyuter1XClass;
}

 interface MainSupportSpisokVozmozhnyhPozhertvovanij {
    mainSupportSpisokSumma: number;
}

 interface MainValuesSpisok {
    mainValuesNomer: string;
    mainValuesTekst: string;
}

 interface MetaData {
    metaOpisanie:  string;
    metaZagolovok: string;
}

