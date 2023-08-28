import React from 'react';
import {useGlobalContext} from "../../../../context/context";
import styles from './TrainingsGift.module.css'
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";

const TrainingsGift = () => {
    const {trainingsPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <div className={styles.content}>
                <Picture className={styles.picture} imageClassName={styles.image}
                         alt={trainingsPage.trainings.trainingsGiftIzobrazhenieDlyaKompyuteraX1.altText}
                         desktopIImageX2={trainingsPage.trainings.trainingsGiftIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                         desktopIImageX1={trainingsPage.trainings.trainingsGiftIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                         mobileIImageX2={trainingsPage.trainings.trainingsGiftIzobrazhenieDlyaTelefonaX2.sourceUrl}
                         mobileIImageX1={trainingsPage.trainings.trainingsGiftIzobrazhenieDlyaTelefonaX1.sourceUrl}
                ></Picture>
                <h2 className={stack('text-lg', styles.title)}>{trainingsPage.trainings.trainingsGiftTekst}</h2>
            </div>
        </div>
    );
};

export default TrainingsGift;