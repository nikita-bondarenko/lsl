import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { stack } from "../../../hooks/useClassName";
import { useGlobalContext } from "../../../context/context";
import { sortDate } from "../../../hooks/useSortDate";
import Picture from "../../images/Picture/Picture";
import { Link } from "react-router-dom";
const Blog = ({ title, linkHref, linkText, remark }) => {
    const { blogs: blogData } = useGlobalContext();
    const [blog, setBlog] = useState();
    useEffect(() => {
        if (blogData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setBlog(sortDate(blogData?.allBlog?.nodes, 'DESC').filter((item, index) => index < 3));
        }
    }, [blogData]);
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: title } }), _jsx("ul", { className: styles.list, children: blog?.map((item, index) => _jsx(Link, { to: item.id, className: stack(styles.item), children: _jsx(Picture, { imageClassName: stack('link', styles.item__image), className: styles.item__picture, desktopIImageX2: item?.blog?.blogPostImageKompyuter2x?.sourceUrl, desktopIImageX1: item?.blog?.blogPostImageKompyuter1x?.sourceUrl, mobileIImageX1: item?.blog?.blogPostImageTelefon1x?.sourceUrl, mobileIImageX2: item?.blog?.blogPostImageTelefon2x?.sourceUrl }) }, index)) }), _jsxs("div", { className: styles.bottom, children: [_jsx("p", { className: stack('remark', styles.remark), dangerouslySetInnerHTML: { __html: remark } }), _jsx(Link, { className: stack('button-primary', styles.link), to: linkHref, dangerouslySetInnerHTML: { __html: linkText } })] })] }));
};
export default Blog;
