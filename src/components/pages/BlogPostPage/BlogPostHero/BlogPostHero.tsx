import React from 'react';
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import styles from "./BlogPostHero.module.css";
import Picture from "../../../images/Picture/Picture";
import {Link} from "react-router-dom";

const BlogPostHero = () => {
    const {blogPostPage} = useGlobalContext()
    return (
        <div className={stack('container-new', styles.body)}>
            <div className={styles.display}>
                <Link to={'/blog'} className={styles.link}>
                    <svg className={styles.link__arrow} xmlns="http://www.w3.org/2000/svg" width="8" height="12"
                         viewBox="0 0 8 12" fill="none">
                        <path
                            d="M5.98022 11.7602L0.220215 6.00023L5.98022 0.240234L7.78021 2.02823L3.67621 6.00023L7.78021 9.97223L5.98022 11.7602Z"
                            fill="black"/>
                    </svg>
                    Назад</Link>
                <Picture imageClassName={styles.image} className={styles.picture}
                         alt={blogPostPage?.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.altText}
                         desktopIImageX1={blogPostPage?.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                         desktopIImageX2={blogPostPage?.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                         mobileIImageX1={blogPostPage?.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX1.sourceUrl}
                         mobileIImageX2={blogPostPage?.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX2.sourceUrl}></Picture>
                <div className={stack(styles.content)}>
                    <h1 className={stack('text-page',styles.title)}>{blogPostPage?.blog.blogPostHeroZagolovok}</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogPostHero;