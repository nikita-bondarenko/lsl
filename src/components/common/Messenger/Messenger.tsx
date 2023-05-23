import React from 'react';
import {stack} from "../../../hooks/useClassName";
import styles from './Messenger.module.css'
import {useCommonSection} from "../../../hooks/useCommonSection";
import Picture from "../../images/Picture/Picture";

const Messenger = () => {
    const [section] = useCommonSection('messendzher')
    return (
        <section className={stack('container','section-indent', styles.body)}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={stack('title-secondary', styles.title)}
                        dangerouslySetInnerHTML={{__html: section?.messenger?.messengerZagolovok}}></h2>
                    <p className={stack('text-primary',styles.text)}
                       dangerouslySetInnerHTML={{__html: section?.messenger?.messengerPodzagolovok}}></p>
                    <a className={stack('button-secondary',styles.link)} target={"_blank"} href={section?.messenger?.messengerSsylkaKnopki}
                       dangerouslySetInnerHTML={{__html: section?.messenger?.messengerTekstKnopki}}></a>
                </div>
                <Picture className={styles.picture}
                         desktopIImageX1={section?.messenger?.messengerImageKompyuter1x?.sourceUrl}
                         desktopIImageX2={section?.messenger?.messengerImageKompyuter2x?.sourceUrl}
                         mobileIImageX1={section?.messenger?.messengerImageTelefon1x?.sourceUrl}
                         mobileIImageX2={section?.messenger?.messengerImageTelefon2x?.sourceUrl}
                ></Picture>
            </div>
        </section>
    );
};

export default Messenger;
