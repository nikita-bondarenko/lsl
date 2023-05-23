import React, {useEffect, useState} from 'react';
import styles from './Feedbacks.module.css'
import {useCommonSection} from "../../../hooks/useCommonSection";
import {stack} from "../../../hooks/useClassName";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Picture from "../../images/Picture/Picture";

type SlideProps = {
    xl3: { spaceBetween: number, slidePerPage },
    xl2: { spaceBetween: number, slidePerPage },
    xl: { spaceBetween: number, slidePerPage },
    lg: { spaceBetween: number, slidePerPage },
    md: { spaceBetween: number, slidePerPage },
    sm: { spaceBetween: number, slidePerPage }
}

const firstSliderProps: SlideProps = {
    xl3: {
        slidePerPage: 2.6,
        spaceBetween: 40
    },
    xl2: {
        slidePerPage: 2.5,
        spaceBetween: 30
    },
    xl: {
        slidePerPage: 3.4,
        spaceBetween: 20
    },
    lg: {
        slidePerPage: 2.7,
        spaceBetween: 20
    },
    md: {
        slidePerPage: 2,
        spaceBetween: 10
    },
    sm: {
        slidePerPage: 1.5,
        spaceBetween: 10
    }
}

const secondSliderProps: SlideProps = {
    xl3: {
        slidePerPage: 1.5,
        spaceBetween: 53
    },
    xl2: {
        slidePerPage: 1.5,
        spaceBetween: 47
    },
    xl: {
        slidePerPage: 2.1,
        spaceBetween: 20
    },
    lg: {
        slidePerPage: 1.7,
        spaceBetween: 20
    },
    md: {
        slidePerPage: 1,
        spaceBetween: 20
    },
    sm: {
        slidePerPage: 1,
        spaceBetween: 10
    }
}
const Feedbacks = () => {
    const [section] = useCommonSection('otzyvy')
    const [spaceBetweenFirst, setSpaceBetweenFirst] = useState(0)
    const [slidePerPageFirst, setSlidePerPageFirst] = useState(0)
    const [spaceBetweenSecond, setSpaceBetweenSecond] = useState(0)
    const [slidePerPageSecond, setSlidePerPageSecond] = useState(0)


    useEffect(() => {
        if (document.body.clientWidth > 1919) {
            setSlidePerPageSecond(secondSliderProps.xl3.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.xl3.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.xl3.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.xl3.spaceBetween)
        } else if (document.body.clientWidth > 1439) {
            setSlidePerPageSecond(secondSliderProps.xl2.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.xl2.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.xl2.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.xl2.spaceBetween)
        } else if (document.body.clientWidth > 1023) {
            setSlidePerPageSecond(secondSliderProps.xl.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.xl.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.xl.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.xl.spaceBetween)
        } else if (document.body.clientWidth > 767) {
            setSlidePerPageSecond(secondSliderProps.lg.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.lg.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.lg.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.lg.spaceBetween)
        } else if (document.body.clientWidth > 479) {
            setSlidePerPageSecond(secondSliderProps.md.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.md.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.md.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.md.spaceBetween)
        } else {
            setSlidePerPageSecond(secondSliderProps.sm.slidePerPage)
            setSlidePerPageFirst(firstSliderProps.sm.slidePerPage)
            setSpaceBetweenSecond(secondSliderProps.sm.spaceBetween)
            setSpaceBetweenFirst(firstSliderProps.sm.spaceBetween)
        }
    }, [])

    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <div className={styles.content}>
                <h2 className={stack('title-secondary', styles.title)}
                    dangerouslySetInnerHTML={{__html: section?.feedbacks?.feedbacksZagolovok}}></h2>
                <p className={stack('text-simple', styles.text)}
                   dangerouslySetInnerHTML={{__html: section?.feedbacks?.feedbacksPodzagolovok}}></p>

            </div>
            <div className={styles.sliders}>
                <div className={styles.sliderFirst}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-ignore  */}
                    <swiper-container space-between={spaceBetweenFirst} slides-per-view={slidePerPageFirst}
                    >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore  */}
                        {section?.feedbacks?.feedbacksImageSlajder?.map((item, index) => <swiper-slide key={index}>
                            <div className={styles.slideFirst__item}>
                                <div className={styles.slideFirst__wrapper}>
                                    <Picture
                                        imageClassName={styles.slideFirst__image}
                                        desktopIImageX1={item?.feedbacksImageKompyuter1x?.sourceUrl}
                                        desktopIImageX2={item?.feedbacksImageKompyuter2x?.sourceUrl}
                                        mobileIImageX1={item?.feedbacksImageTelefon1x?.sourceUrl}
                                        mobileIImageX2={item?.feedbacksImageTelefon2x?.sourceUrl}
                                        className={styles.slideFirst__picture}></Picture>
                                </div>
                            </div>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/*@ts-ignore  */}
                        </swiper-slide>)}
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore  */}
                    </swiper-container>
                </div>
                <div className={styles.sliderSecond}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-ignore  */}
                    <swiper-container space-between={spaceBetweenSecond} slides-per-view={slidePerPageSecond}
                    >
                        {
                          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                            section?.feedbacks?.feedbacksSimpleSlajder?.map((item, index) => <swiper-slide key={index}
                        >
                            <div className={styles.sliderSecond__item}>
                                <div className={styles.sliderSecond__top}>
                                    <Picture className={styles.sliderSecond__picture}
                                             mobileIImageX1={item?.feedbacksSimpleTelefon1x?.sourceUrl}
                                             mobileIImageX2={item?.feedbacksSimpleTelefon2x?.sourceUrl}
                                             desktopIImageX1={item?.feedbacksSimpleKompyuter1x?.sourceUrl}
                                             desktopIImageX2={item?.feedbacksSimpleKompyuter2x?.sourceUrl}></Picture>
                                    <div className={styles.sliderSecond__person}>
                                        <h3 className={stack(styles.sliderSecond__name)}
                                            dangerouslySetInnerHTML={{__html: item?.feedbacksSimpleImya}}></h3>
                                        <p className={stack('text-simple', styles?.sliderSecond__desc)}
                                           dangerouslySetInnerHTML={{__html: item?.feedbacksSimpleOpisanieKlienta}}></p>
                                    </div>
                                </div>
                                <p className={stack('text-simple', styles.sliderSecond__text)}
                                   dangerouslySetInnerHTML={{__html: item?.feedbacksSimpleTekstOtzyva}}></p>

                            </div>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/*@ts-ignore  */}
                        </swiper-slide>)}
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore  */}
                    </swiper-container>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
