import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './HomePublications.module.css';
import { stack } from "../../../../hooks/useClassName";
import { useGlobalContext } from "../../../../context/context";
import { sortDate } from "../../../../hooks/useSortDate";
import Picture from "../../../images/Picture/Picture";
import { Link } from "react-router-dom";
const HomePublications = () => {
    const { publications: publicationsData } = useGlobalContext();
    const [publications, setPublications] = useState();
    useEffect(() => {
        if (publicationsData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setPublications(sortDate(publicationsData?.publications?.nodes).filter((item, index) => index < 2));
        }
    }, [publicationsData]);
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx("h2", { className: stack('title-secondary', styles.title), children: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" }), _jsx("ul", { className: stack(styles.list), children: publications?.map((item, index) => _jsxs(Link, { to: '', className: stack('link', styles.item), children: [_jsx(Picture, { imageClassName: styles.item__image, className: styles.item__picture, desktopIImageX1: item?.publications?.publicationsImageKompyuter1x?.sourceUrl, desktopIImageX2: item?.publications?.publicationsImageKompyuter2x?.sourceUrl, mobileIImageX1: item?.publications?.publicationsImageTelefon1x?.sourceUrl, mobileIImageX2: item?.publications?.publicationsImageTelefon2x?.sourceUrl }), _jsx("p", { className: stack('text-secondary', styles.item__text), dangerouslySetInnerHTML: { __html: item?.publications?.publicationsKratkoeOpisanie } })] }, index)) })] }));
};
export default HomePublications;
