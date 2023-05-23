import React from 'react';
import styles from './HomeHero.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import Carousel from 're-carousel'
import Picture from "../../../images/Picture/Picture";


const buttonStyles = {
    wrapper: {
        position: 'absolute',
        width: '100%',
        zIndex: '100',
        bottom: '0',
        textAlign: 'center'
    },

}

function Buttons(props) {

    const {index, total, loop, prevHandler, nextHandler} = props
    return (
        <div className={styles.slider__buttonWrapper}>
            {(loop || index !== 0) && (
                <div className={stack('link',styles.slider__btn,styles.slider__btnPrev)} onClick={prevHandler}><img className={styles.slider__buttonIcon}
                                                                                   src="/image/arrow-left.png" alt=""/>
                </div>
            )}
            {(loop || index !== total - 1) && (
                <div className={stack('link',styles.slider__btn,styles.slider__btnNext)} onClick={nextHandler}><img className={styles.slider__buttonIcon}
                                                                                   src="/image/arrow-right.png" alt=""/>
                </div>
            )}
        </div>
    )
}


const HomeHero = () => {

    const {mainPageData} = useGlobalContext()
    return (
        <section className={stack('container', styles.body)}>
            <div className={styles.content}>
                <div className={styles.content__top}>
                    <h1 className={stack('title-primary', styles.title)}
                        dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainHeroZagolovok}}></h1>
                    <p className={stack('text-primary', styles.subtitle)}
                       dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainHeroPodzagolovok}}></p>
                </div>
                <div className={styles.content__bottom}>
                    <p className={stack('text-primary', styles.text)}
                       dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainHeroTekst}}></p>
                    <p className={stack('text-secondary', styles.small)}
                       dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainHeroMalyjTekst}}></p>
                </div>
            </div>
            <div className={styles.slider}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-ignore  */}
                <Carousel loop auto widgets={[Buttons]} className={styles.slider__carousel}>
                    {mainPageData?.page?.main?.mainHeroSlajder?.map((item, index) => <Picture key={index}
                        className={styles.slider__picture} imageClassName={styles.slider__image} desktopIImageX1={item.mainHeroSlajderKompyuter1x.sourceUrl}
                        desktopIImageX2={item.mainHeroSlajderKompyuter2x.sourceUrl}
                        mobileIImageX1={item.mainHeroSlajderTelefon1x.sourceUrl}
                        mobileIImageX2={item.mainHeroSlajderTelefon2x.sourceUrl}></Picture>)}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-ignore  */}
                </Carousel>
                <a className={stack('button-primary', styles.button)}
                   href={mainPageData?.page?.main?.mainHeroAdresSsylki}>{mainPageData?.page?.main?.mainHeroTekstSsylki}</a>
            </div>
        </section>
    );
};

export default HomeHero;
