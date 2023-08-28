import React from 'react';
import styles from './HistorySupport.module.css'
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import {Link} from "react-router-dom";
import historyHistory from "../HistoryHistory/HistoryHistory";
import Picture from "../../../images/Picture/Picture";

const HistorySupport = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <div className={styles.content}>
                <h2 className={styles.title}>{historyPage.history.historyMessengerZagolovok}</h2>
                <p className={styles.text}>{historyPage.history.historyMessengerTekst}</p>
                <Link className={stack('button-secondary-new', 'link', styles.link)}
                      to={historyPage.history.historyMessengerSsylkaKnopki}>{historyPage.history.historyMessengerTekstKnopki}</Link>
            </div>
            <Picture imageClassName={styles.image} className={styles.picture}
                     alt={historyPage.history.historyMessengerIzobrazhenieDlyaKompyuteraX1.altText}
                     desktopIImageX1={historyPage.history.historyMessengerIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                     desktopIImageX2={historyPage.history.historyMessengerIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                     mobileIImageX1={historyPage.history.historyMessengerIzobrazhenieDlyaTelefonaX1.sourceUrl}
                     mobileIImageX2={historyPage.history.historyMessengerIzobrazhenieDlyaTelefonaX2.sourceUrl}></Picture>
        </div>
    );
};

export default HistorySupport;