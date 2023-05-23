import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Header, { Navigation } from "./Header/Header";
import Cookies from "./Cookies/Cookies";
import Footer from "./Footer/Footer";
import { useGlobalContext } from "../../context/context";
import { useQuery } from "@apollo/client";
import { GET_COMMON_SECTIONS } from "../../gql/queries/getCommonSections";
import { getMenu } from "../../gql/queries/getMenu";
import Loading from "../loading/Loading";
import FixedLayer from "./FixedLayer/FixedLayer";
import Modal from "./Modal/Modal";
const Layout = ({ children }) => {
    const { setCommonSections, setMenu, title, description, isLoading, setIsLoading, isNavModalOpen, setIsNavModalOpen } = useGlobalContext();
    const { data: commonSections } = useQuery(GET_COMMON_SECTIONS, { fetchPolicy: 'no-cache' });
    const { data: menu } = useQuery(getMenu, { fetchPolicy: 'no-cache' });
    useEffect(() => {
        if (commonSections) {
            commonSections && setCommonSections(commonSections);
        }
    }, [commonSections]);
    useEffect(() => {
        if (menu) {
            menu && setMenu(menu);
        }
    }, [menu]);
    const onModalClose = (value) => {
        setIsNavModalOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [title && _jsx("title", { children: title }), description && _jsx("meta", { name: 'description', content: description })] }), _jsx(Loading, {}), _jsxs("div", { style: { display: isLoading ? 'none' : 'block' }, className: !isLoading ? 'animate-appear' : '', children: [_jsx(Header, {}), _jsxs(FixedLayer, { children: [_jsx(Cookies, {}), _jsx(Modal, { open: isNavModalOpen, setOpen: onModalClose, children: isNavModalOpen && _jsx(Navigation, {}) })] }), children, _jsx(Footer, {})] })] }));
};
export default Layout;
