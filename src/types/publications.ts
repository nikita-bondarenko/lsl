
export interface PublicationsQuery {
    publications: DataPublications;
}

 interface DataPublications {
    nodes: Node[];
}

export interface PublicationsNode {
    date:         Date;
    slug:         string;
    publications: NodePublications;
}

 interface NodePublications {
    publicationsKratkoeOpisanie:   string;
    publicationsNazvanie:          string;
    publicationsPodrobnoeOpisanie: null;
    publicationsAdresSsylki:       null | string;
    publicationsImageKompyuter1x:  PublicationsImage;
    publicationsImageKompyuter2x:  PublicationsImage;
    publicationsImageTelefon1x:    PublicationsImage;
    publicationsImageTelefon2x:    PublicationsImage;
}

 interface PublicationsImage {
    sourceUrl: string;
}


