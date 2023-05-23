import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Picture.module.css';
import { stack } from "../../../hooks/useClassName";
const Picture = ({ desktopIImageX1, mobileIImageX1, desktopIImageX2, mobileIImageX2, className, imageClassName }) => {
    return (_jsxs("picture", { className: stack(styles.picture, className), children: [_jsx("source", { className: stack(imageClassName, styles.image), srcSet: `${mobileIImageX1} 1x, ${mobileIImageX2} 2x` }), _jsx("img", { className: stack(imageClassName, styles.image), src: desktopIImageX1, srcSet: `${desktopIImageX2} 2x`, alt: "" })] }));
};
export default Picture;
