import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useEffect, useState } from 'react';
import styles from './HomeSafety.module.css';
import { stack } from "../../../../hooks/useClassName";
import { useGlobalContext } from "../../../../context/context";
const HomeSafety = () => {
    const { mainPageData } = useGlobalContext();
    const video = createRef();
    const [isPlaying, setIsPlaying] = useState(false);
    // const btnClickHandler = () => {
    //     setIsPlaying(prev => !prev)
    // }
    const videoClickHandler = () => {
        setIsPlaying(prev => !prev);
    };
    useEffect(() => {
        if (video.current) {
            if (isPlaying) {
                video.current.play();
            }
            else {
                video.current.pause();
            }
        }
    }, [isPlaying]);
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsxs("div", { className: styles.top, children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSafetyZagolovok } }), _jsx("p", { className: stack('text-secondary', styles.text), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSafetyPervyjTekst } })] }), _jsxs("div", { className: styles.bottom, children: [_jsx("p", { className: stack('text-secondary', styles.text), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSafetyVtorojTekst } }), _jsxs("div", { onClick: videoClickHandler, className: styles.video, children: [_jsx("video", { ref: video, className: styles.video__media, src: mainPageData?.page?.main?.mainSafetyVideo.mediaItemUrl }), !isPlaying && _jsx("button", { className: stack('link', styles.video__button), children: _jsx("img", { className: styles.video__image, src: "/image/play.png", alt: "" }) })] })] })] }));
};
export default HomeSafety;
