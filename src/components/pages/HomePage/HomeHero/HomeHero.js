import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './HomeHero.module.css';
import { stack } from "../../../../hooks/useClassName";
import { useGlobalContext } from "../../../../context/context";
import Carousel from 're-carousel';
import Picture from "../../../images/Picture/Picture";
const buttonStyles = {
    wrapper: {
        position: 'absolute',
        width: '100%',
        zIndex: '100',
        bottom: '0',
        textAlign: 'center'
    },
};
function Buttons(props) {
    const { index, total, loop, prevHandler, nextHandler } = props;
    return (_jsxs("div", { className: styles.slider__buttonWrapper, children: [(loop || index !== 0) && (_jsx("div", { className: stack('link', styles.slider__btn, styles.slider__btnPrev), onClick: prevHandler, children: _jsx("img", { className: styles.slider__buttonIcon, src: "/image/arrow-left.png", alt: "" }) })), (loop || index !== total - 1) && (_jsx("div", { className: stack('link', styles.slider__btn, styles.slider__btnNext), onClick: nextHandler, children: _jsx("img", { className: styles.slider__buttonIcon, src: "/image/arrow-right.png", alt: "" }) }))] }));
}
const HomeHero = () => {
    const { mainPageData } = useGlobalContext();
    return (_jsxs("section", { className: stack('container', styles.body), children: [_jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.content__top, children: [_jsx("h1", { className: stack('title-primary', styles.title), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainHeroZagolovok } }), _jsx("p", { className: stack('text-primary', styles.subtitle), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainHeroPodzagolovok } })] }), _jsxs("div", { className: styles.content__bottom, children: [_jsx("p", { className: stack('text-primary', styles.text), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainHeroTekst } }), _jsx("p", { className: stack('text-secondary', styles.small), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainHeroMalyjTekst } })] })] }), _jsxs("div", { className: styles.slider, children: [_jsx(Carousel, { loop: true, auto: true, widgets: [Buttons], className: styles.slider__carousel, children: mainPageData?.page?.main?.mainHeroSlajder?.map((item, index) => _jsx(Picture, { className: styles.slider__picture, imageClassName: styles.slider__image, desktopIImageX1: item.mainHeroSlajderKompyuter1x.sourceUrl, desktopIImageX2: item.mainHeroSlajderKompyuter2x.sourceUrl, mobileIImageX1: item.mainHeroSlajderTelefon1x.sourceUrl, mobileIImageX2: item.mainHeroSlajderTelefon2x.sourceUrl }, index)) }), _jsx("a", { className: stack('button-primary', styles.button), href: mainPageData?.page?.main?.mainHeroAdresSsylki, children: mainPageData?.page?.main?.mainHeroTekstSsylki })] })] }));
};
export default HomeHero;
