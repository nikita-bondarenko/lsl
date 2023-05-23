import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Logo.module.css';
import { Link } from "react-router-dom";
import { stack } from "../../../hooks/useClassName";
const Logo = ({ desktopUrl, mobileUrl, className }) => {
    return (_jsx(Link, { to: '/', className: stack('link', styles.link, className), children: _jsxs("picture", { className: styles.picture, children: [_jsx("source", { className: styles.image, srcSet: mobileUrl, media: "(max-width: 1023px)" }), _jsx("img", { className: styles.image, src: desktopUrl, alt: "" })] }) }));
};
export default Logo;
