import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";
import { useCommonSection } from "../../../hooks/useCommonSection";
import Logo from "../../images/Logo/Logo";
import styles from './Header.module.css';
import { stack } from "../../../hooks/useClassName";
import { useSortNav } from "../../../hooks/useSortNav";
const NavSublist = (props) => {
    const [arr] = useSortNav(props.childItems.nodes);
    const [open, setOpen] = useState(false);
    const [sublistHeight, setSublistHeight] = useState();
    const { isMobile } = useGlobalContext();
    const ref = createRef();
    const onOpen = () => {
        !isMobile && setOpen(true);
    };
    const onClose = () => {
        !isMobile && setOpen(false);
    };
    useEffect(() => {
        if (ref.current) {
            setSublistHeight(ref.current.clientHeight);
        }
    }, [open]);
    const onClick = () => {
        isMobile && setOpen(prev => !prev);
    };
    return _jsxs(_Fragment, { children: [_jsxs("div", { onClick: onClick, onMouseEnter: onOpen, onMouseLeave: onClose, className: stack(styles.nav__sublist, open && styles.open), children: [_jsx("span", { className: stack('text-small', styles.nav__link, styles.sublist__title), children: props.label }), _jsx("img", { className: styles.sublist__arrow, src: "/image/nav-arrow.png", alt: "" }), _jsx("div", { ref: ref, className: styles.sublist__wrapper, children: _jsx("ul", { className: styles.sublist__list, children: arr.map(({ label, url }) => _jsx(Link, { className: stack('text-small', 'nav-link', styles.nav__link, styles.sublist__item), to: url, children: label }, label)) }) })] }), _jsx("div", { className: styles.nav__indent, style: { height: open && sublistHeight ? sublistHeight : 0 } })] });
};
const PhoneButton = ({ number }) => {
    return _jsx("a", { className: stack('button-secondary', styles.button), href: `tel:${number}`, children: number });
};
export const Navigation = () => {
    const { menu } = useGlobalContext();
    const { setIsMenuLoading, setHeaderLoading, setIsNavModalOpen } = useGlobalContext();
    useEffect(() => {
        if (menu) {
            setIsMenuLoading(false);
        }
    }, [menu]);
    const [section] = useCommonSection("shapka");
    useEffect(() => {
        if (section) {
            setHeaderLoading(false);
        }
    }, [section]);
    const [navArr] = useSortNav(menu?.menu?.menuItems?.nodes);
    return (_jsxs("ul", { onClick: (e) => e.stopPropagation(), className: stack(styles.nav), children: [navArr?.map((item) => _jsx("li", { className: styles.nav__item, children: !item.childItems.nodes.length
                    ? _jsx(Link, { className: stack('text-small', 'nav-link', styles.nav__link), to: item.url, children: item.label })
                    : _jsx(NavSublist, { ...item }) }, item.label)), _jsx(PhoneButton, { number: section?.header?.headerTelefon }), _jsx("button", { className: styles.nav__close, onClick: () => setIsNavModalOpen(false), children: _jsx("img", { src: "/image/nav-close.png", className: styles.nav__close__icon, alt: "" }) })] }));
};
const Header = () => {
    const [section] = useCommonSection("shapka");
    const { setHeaderLoading, setIsNavModalOpen } = useGlobalContext();
    useEffect(() => {
        if (section) {
            setHeaderLoading(false);
        }
    }, [section]);
    const clickHandler = () => {
        setIsNavModalOpen(prev => !prev);
    };
    if (!section)
        return null;
    return (_jsx("div", { className: stack('container', styles.body), children: _jsxs("div", { className: styles.wrapper, children: [_jsx(Logo, { className: styles.logo, desktopUrl: section?.header?.headerLogotip?.sourceUrl, mobileUrl: section?.header?.headerLogotipMobile?.sourceUrl }), _jsx("div", { className: styles.body__nav, children: _jsx(Navigation, {}) }), _jsx("button", { onClick: clickHandler, className: stack('nav-link', styles.burger), children: _jsx("img", { className: styles.burger__icon, src: "/image/burger.png", alt: "" }) })] }) }));
};
export default Header;
