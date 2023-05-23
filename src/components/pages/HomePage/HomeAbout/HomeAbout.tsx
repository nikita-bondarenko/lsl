import React from 'react';
import {stack} from "../../../../hooks/useClassName";
import styles from './HomeAbout.module.css'
import Picture from "../../../images/Picture/Picture";
import {useGlobalContext} from "../../../../context/context";

const HomeAbout = () => {
    const {mainPageData} = useGlobalContext()
    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <Picture desktopIImageX1={mainPageData?.page?.main?.mainAboutImageKompyuter1x?.sourceUrl}
                     desktopIImageX2={mainPageData?.page?.main?.mainAboutImageKompyuter2x?.sourceUrl}
                     mobileIImageX1={mainPageData?.page?.main?.mainAboutImageTelefon1x?.sourceUrl}
                     mobileIImageX2={mainPageData?.page?.main?.mainAboutImageTelefon2x?.sourceUrl}
                     className={styles.picture} imageClassName={styles.image}></Picture>
            <div className={styles.content}>
                <h2 className={stack('title-secondary', styles.title)}
                    dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainAboutZagolovok}}></h2>
                <p className={stack('text-secondary',styles.text)}
                   dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainAboutTekst}}></p>
            </div>
        </section>
    );
};

export default HomeAbout;
