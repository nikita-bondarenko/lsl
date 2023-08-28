import React, {useState} from 'react';
import styles from './TrainingsSelect.module.css'
import {useGlobalContext} from "../../../../context/context";
import {useTrainings} from "../../../../hooks/useTrainings";
import {stack} from "../../../../hooks/useClassName";
import {Link} from "react-router-dom";
import Picture from "../../../images/Picture/Picture";


const buttonTextClose = 'Смотреть дальше'
const buttonTextOpen = 'Свернуть'
const TrainingsSelect = () => {

    const [buttonText, setButtonText] = useState(buttonTextClose)

    const {trainingsPage} = useGlobalContext()
    const [trainings] = useTrainings()
    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <h2 className={stack('text-lg', styles.title)}>{trainingsPage.trainings.trainingsSelectZagolovok}</h2>
            <p className={styles.subtitle}>{trainingsPage.trainings.trainingsSelectPodzagolovok}</p>
            <div className={styles.screen}>
                <ul className={styles.list}>
                    {trainings.map((item, index) => <li key={index} className={styles.item}>
                        <Link to={`/trainings/` + ''} className={stack('link', styles.link)}>
                            <Picture imageClassName={styles.image} className={styles.picture}
                                     alt={item.training.trainingImageKompyuter1x.altText}
                                     desktopIImageX1={item.training.trainingImageKompyuter1x.sourceUrl}
                                     desktopIImageX2={item.training.trainingImageKompyuter2x.sourceUrl}
                                     mobileIImageX1={item.training.trainingImageTelefon1x.sourceUrl}
                                     mobileIImageX2={item.training.trainingImageTelefon2x.sourceUrl}></Picture>
                            <div className={styles.item__content}>
                                <div className={styles.content__top}>
                                    <p className={styles.content__title}>{item.training.nazvanie}</p>
                                    <p className={styles.content__title}>{item.training.trainingCzena}</p>
                                </div>
                                <p className={styles.content__text}>{item.training.trainingKratkoeOpisanie}</p>
                            </div>
                        </Link>
                    </li>)}
                </ul>
            </div>
            <button className={styles.button}>{buttonText}</button>
        </div>
    );
};

export default TrainingsSelect;