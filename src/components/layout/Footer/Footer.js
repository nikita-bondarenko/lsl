import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useCommonSection } from "../../../hooks/useCommonSection";
import { useGlobalContext } from "../../../context/context";
import styles from './Footer.module.css';
import { stack } from "../../../hooks/useClassName";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo/Logo";
import ToTopButton from "../../common/ToTopButton/ToTopButton";
const Footer = () => {
    const [section] = useCommonSection("podval");
    const { setFooterLoading, menu } = useGlobalContext();
    useEffect(() => {
        if (section) {
            setFooterLoading(false);
        }
    }, [section]);
    if (!section)
        return null;
    return (_jsxs("section", { className: stack('container', styles.footer), children: [_jsx(ToTopButton, { className: styles.buttonToTop }), _jsxs("div", { className: styles.footer__body, children: [_jsxs("div", { className: styles.logo, children: [_jsx(Logo, { className: styles.logo__link, mobileUrl: section?.footer?.footerLogotipMobile?.sourceUrl, desktopUrl: section?.footer?.footerLogotip?.sourceUrl }), _jsx("p", { className: stack(styles.text, styles.logo__copy), dangerouslySetInnerHTML: { __html: section?.footer?.footerKopirajt } })] }), _jsxs("div", { className: styles.doc, children: [_jsx("a", { href: section?.footer?.footerPublichnayaOferta?.mediaItemUrl, className: stack('link', styles.text, styles.doc__item), target: "_blank", children: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430" }), _jsx("a", { href: section?.footer?.footerPolitikaKonfidenczialnosti?.mediaItemUrl, className: stack('link', styles.text, styles.doc__item), target: "_blank", children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" })] }), _jsxs("div", { className: styles.nav, children: [_jsx("h3", { className: stack(styles.title, styles.nav__title), dangerouslySetInnerHTML: { __html: section?.footer?.footerMenuZagolovok } }), _jsx("ul", { className: styles.nav__list, children: menu?.menu?.menuItems?.nodes?.map(item => _jsx(Link, { className: stack('nav-link', styles.text, styles.nav__link), to: item.url, children: item.label }, item.label)) })] }), _jsxs("div", { className: styles.social, children: [_jsx("h3", { className: stack(styles.title, styles.social__title), dangerouslySetInnerHTML: { __html: section?.footer?.footerSocialZagolovok } }), _jsx("ul", { className: styles.social__list, children: section?.footer?.footerSocialSpisok?.map((item, index) => _jsxs("a", { href: item.footerSocialAdres, target: "_blank", className: stack('link', styles.social__item), children: [_jsx("img", { className: styles.social__icon, src: item?.footerSocialIkonka?.sourceUrl, alt: "" }), _jsx("p", { className: stack(styles.text, styles.social__text), children: item.footerSocialTekst })] }, index)) }), _jsx("p", { className: stack('remark', styles.social__remark), dangerouslySetInnerHTML: { __html: section?.footer?.footerSocialRemarka } })] }), _jsxs("div", { className: styles.contacts, children: [_jsx("h3", { className: stack(styles.title, styles.contacts__title), children: section?.footer?.footerContactsZagolovok }), _jsx("ul", { className: styles.contacts__list, children: section?.footer?.footerContactsSpisok?.map((item, index) => _jsxs("a", { className: stack('link', styles.contacts__link), children: [_jsx("p", { className: stack(styles.text, styles.contacts__text), children: item.footerContactsTekst }), item.footerContactsEstKommentarij === "true" &&
                                            _jsxs("p", { className: styles.contacts__description, children: [" ", item.footerContactsKommentarij] })] }, index)) })] })] })] }));
};
export default Footer;
