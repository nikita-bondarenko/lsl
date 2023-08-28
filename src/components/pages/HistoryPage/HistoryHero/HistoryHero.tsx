import React from 'react';
import styles from './HistoryHero.module.css'
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";

const HistoryHero = () => {
    const {historyPage} = useGlobalContext()
    return (
        <div className={stack('container-new', styles.body, 'section-indent-new')}>
            <Picture imageClassName={styles.image} className={styles.picture}
                     alt={historyPage.history.historyHeroImageKompyuterX1.altText}
                     desktopIImageX1={historyPage.history.historyHeroImageKompyuterX1.sourceUrl}
                     desktopIImageX2={historyPage.history.historyHeroImageKompyuterX2.sourceUrl}
                     mobileIImageX1={historyPage.history.historyHeroImageTelefonX1.sourceUrl}
                     mobileIImageX2={historyPage.history.historyHeroImageTelefonX2.sourceUrl}></Picture>
            <div className={stack(styles.content)}>
                <h1 className={styles.title}>{historyPage.history.historyHeroBolshojTekst}</h1>
                <p className={styles.text}> {historyPage.history.historyHeroMalyjTekst}</p>
            </div>
        </div>
    );
};

export default HistoryHero;