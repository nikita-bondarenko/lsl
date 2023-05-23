

 export interface TrainingsQuery {
    trainings: Trainings;
}

 interface Trainings {
    nodes: Node[];
}

 export interface TrainingsNode {
    date:     Date;
    modified: Date;
    training: Training;
}

 interface Training {
    nazvanie:                  string;
    trainingCzena:             number;
    trainingKratkoeOpisanie:   string;
    trainingPodrobnoeOpisanie: null;
    trainingImageKompyuter1x:  TrainingImage;
    trainingImageKompyuter2x:  TrainingImage;
    trainingImageTelefon1x:    TrainingImage;
    trainingImageTelefon2x:    TrainingImage;
}

 interface TrainingImage {
    sourceUrl: string;
}


