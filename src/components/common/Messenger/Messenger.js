import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stack } from "../../../hooks/useClassName";
import styles from './Messenger.module.css';
import { useCommonSection } from "../../../hooks/useCommonSection";
import Picture from "../../images/Picture/Picture";
const Messenger = () => {
    const [section] = useCommonSection('messendzher');
    return (_jsx("section", { className: stack('container', 'section-indent', styles.body), children: _jsxs("div", { className: styles.wrapper, children: [_jsxs("div", { className: styles.content, children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: section?.messenger?.messengerZagolovok } }), _jsx("p", { className: stack('text-primary', styles.text), dangerouslySetInnerHTML: { __html: section?.messenger?.messengerPodzagolovok } }), _jsx("a", { className: stack('button-secondary', styles.link), target: "_blank", href: section?.messenger?.messengerSsylkaKnopki, dangerouslySetInnerHTML: { __html: section?.messenger?.messengerTekstKnopki } })] }), _jsx(Picture, { className: styles.picture, desktopIImageX1: section?.messenger?.messengerImageKompyuter1x?.sourceUrl, desktopIImageX2: section?.messenger?.messengerImageKompyuter2x?.sourceUrl, mobileIImageX1: section?.messenger?.messengerImageTelefon1x?.sourceUrl, mobileIImageX2: section?.messenger?.messengerImageTelefon2x?.sourceUrl })] }) }));
};
export default Messenger;
