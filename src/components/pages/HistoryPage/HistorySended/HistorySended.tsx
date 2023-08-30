import React, {useEffect, useState} from 'react';
import styles from './HistorySended.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import history from "../../../../pages/History";
import {InView} from "react-intersection-observer";

const HistorySended = () => {
    const [isTopInView, setIsTopInView] = useState(false)
    const [isBottomInView, setIsBottomInView] = useState(false)
    const {historyPage} = useGlobalContext()




    const startAnimation = () => {

    }

    const stopAnimation = () => {


    }

    useEffect(() => {
        if (!!isBottomInView || !!isTopInView) {
            startAnimation()
        } else {
            stopAnimation()
        }

        return () => {
            stopAnimation()
        }

    }, [isBottomInView, isTopInView]);

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <div className={styles.top}>
                <h2 className={stack('text-large', styles.title)}>
                    <span className={stack('text-large', styles.title__text)}
                          dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedNachaloPervojStroki}}></span>
                    <span
                        className={stack(styles.title__text, styles.title__marked)}
                        dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedVydelennyjTekstPervojStroki}}></span>
                    <span className={stack('text-large', styles.title__text)}
                          dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedKoneczPervojStroki}}></span>
                </h2>
                <p className={styles.subtitle}>
                    <span
                        className={stack(styles.subtitle__marked, styles.subtitle__text)}
                        dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedVydelennyjTekstVtorojStroki}}></span>
                    <span className={styles.subtitle__text}
                          dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedKoneczVtorojStroki}}></span>
                </p>
                <p className={stack(styles.subtitle, styles.subtitle__text)}
                   dangerouslySetInnerHTML={{__html: historyPage?.history.historySendedTretyaStroka}}></p>
            </div>
            <div className={styles.display}>
                <InView onChange={value => setIsTopInView(value)}></InView>
                {historyPage?.history.historySendedGoroda.map((row, index) => <div key={index}
                                                                                   className={styles.display__row}>
                    {row.strokaGorodov.map((item, index) => <div key={index} className={styles.display__item}>
                        <img className={styles.display__image} src={item.izobrazhenie.sourceUrl}
                             alt={item.izobrazhenie.altText}/>
                        <p className={styles.display__text}>{item.nazvanieGoroda}</p>
                    </div>)}
                </div>)}
                <InView onChange={value => setIsBottomInView(value)}></InView>
            </div>
        </div>
    );
};

export default HistorySended;