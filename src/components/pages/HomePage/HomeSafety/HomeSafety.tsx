import React, {createRef, useEffect, useState} from 'react';
import styles from './HomeSafety.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";

const HomeSafety = () => {
    const {mainPage:page} = useGlobalContext()
    const video = createRef<HTMLVideoElement>()
    const [isPlaying, setIsPlaying] = useState(false)
    const videoClickHandler = () => {
        setIsPlaying(prev => !prev)
    }

    useEffect(() => {
        if (video.current) {
            if (isPlaying) {
                video.current.play()
            } else {
                video.current.pause()
            }


        }
    }, [isPlaying])

    return (
        <section className={stack('container','section-indent', styles.body)}>
            <div className={styles.top}>
                <h2 className={stack('title-secondary', styles.title)}
                    dangerouslySetInnerHTML={{__html: page?.main?.mainSafetyZagolovok}}></h2>
                <p className={stack('text-secondary', styles.text)}
                   dangerouslySetInnerHTML={{__html: page?.main?.mainSafetyPervyjTekst}}></p>
            </div>
            <div className={styles.bottom}>
                <p className={stack('text-secondary', styles.text)}
                   dangerouslySetInnerHTML={{__html: page?.main?.mainSafetyVtorojTekst}}></p>
                <div onClick={videoClickHandler} className={styles.video}>
                    <video ref={video} className={styles.video__media}
                           src={page?.main?.mainSafetyVideo.mediaItemUrl}
                    ></video>
                    {!isPlaying && <button
                                           className={stack('link', styles.video__button)}>
                        <img className={styles.video__image} src="/image/play.png" alt=""/></button>}
                </div>
            </div>
        </section>
    );
};

export default HomeSafety;
