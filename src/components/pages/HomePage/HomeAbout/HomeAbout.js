import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stack } from "../../../../hooks/useClassName";
import styles from './HomeAbout.module.css';
import Picture from "../../../images/Picture/Picture";
import { useGlobalContext } from "../../../../context/context";
const HomeAbout = () => {
    const { mainPageData } = useGlobalContext();
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx(Picture, { desktopIImageX1: mainPageData?.page?.main?.mainAboutImageKompyuter1x?.sourceUrl, desktopIImageX2: mainPageData?.page?.main?.mainAboutImageKompyuter2x?.sourceUrl, mobileIImageX1: mainPageData?.page?.main?.mainAboutImageTelefon1x?.sourceUrl, mobileIImageX2: mainPageData?.page?.main?.mainAboutImageTelefon2x?.sourceUrl, className: styles.picture, imageClassName: styles.image }), _jsxs("div", { className: styles.content, children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainAboutZagolovok } }), _jsx("p", { className: stack('text-secondary', styles.text), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainAboutTekst } })] })] }));
};
export default HomeAbout;
