import React from 'react';
import styles from './HistoryWe.module.css'
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";
import {useGlobalContext} from "../../../../context/context";
import QuoteTop from "../../../svg/QuoteTop";
import QuoteBottom from "../../../svg/QuoteBottom";

const HistoryWe = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', styles.body, 'section-indent-new')}>
            <div className={styles.top}>
                <div className={styles.top__back}>
                    <Picture imageClassName={styles.top__image} className={styles.top__picture}
                             alt={historyPage.history.historyWeFirstImageKompyuterX1.altText}
                             desktopIImageX1={historyPage.history.historyWeFirstImageKompyuterX1.sourceUrl}
                             desktopIImageX2={historyPage.history.historyWeFirstImageKompyuterX2.sourceUrl}
                             mobileIImageX1={historyPage.history.historyWeFirstImageTelefonX1.sourceUrl}
                             mobileIImageX2={historyPage.history.historyWeFirstImageTelefonX2.sourceUrl}></Picture>
                </div>
                <div className={styles.top__content}>
                    <h2 className={styles.title}>{historyPage.history.historyWeZagolovok}</h2>
                    <p className={stack(styles.text, 'text-sm')}>{historyPage.history.historyWeTekstSverhu}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom__content}>
                    <p className={stack('text-sm',styles.text)}>{historyPage.history.historyWeTekstVnizu}</p>
                </div>
                <div className={styles.bottom__back}>
                    <p className={styles.bottom__quote}>
                        <QuoteTop className={styles.quotes}></QuoteTop>
                        {historyPage.history.historyWeCzitata}
                        <QuoteBottom className={styles.quotes}></QuoteBottom>
                    </p>
                    <Picture imageClassName={styles.bottom__image} className={styles.top__picture}
                             alt={historyPage.history.historyWeSecondImageKompyuterX1.altText}
                             desktopIImageX1={historyPage.history.historyWeSecondImageKompyuterX1.sourceUrl}
                             desktopIImageX2={historyPage.history.historyWeSecondImageKompyuterX2.sourceUrl}
                             mobileIImageX1={historyPage.history.historyWeSecondImageTelefonX1.sourceUrl}
                             mobileIImageX2={historyPage.history.historyWeSecondImageTelefonX2.sourceUrl}></Picture>
                </div>
            </div>
        </div>
    );
};

export default HistoryWe;