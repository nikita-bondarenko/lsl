import React from 'react';
import styles from './BlogPostMore.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import SwiperLight from "../../../lowleveled/SwiperLight/SwiperLight";
import {usePosts} from "../../../../hooks/usePosts";
import {Link} from "react-router-dom";
import Picture from "../../../images/Picture/Picture";

const BlogPostMore = () => {
    const [posts] = usePosts()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <h2 className={stack('text-lg', styles.title)}>Читайте также</h2>
            <SwiperLight>
                <ul className={styles.list}>
                    {posts.map((item, index) => <li key={index} className={styles.item}>
                        <Link to={"/blog/" + item.slug}>
                            <Picture imageClassName={styles.item__image}
                                     alt={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.altText}
                                     className={styles.item__picture}
                                     desktopIImageX1={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                                     desktopIImageX2={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                                     mobileIImageX2={item.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX1.sourceUrl}
                                     mobileIImageX1={item.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX2.sourceUrl}></Picture>
                            <p className={styles.item__title}
                               dangerouslySetInnerHTML={{__html: item.blog.blogPostHeroZagolovok}}></p>
                            <p className={styles.item__text}
                               dangerouslySetInnerHTML={{__html: item.blog.blogPostHeroKratkoeOpisanie}}></p>
                        </Link>
                    </li>)}
                </ul>
            </SwiperLight>
        </div>
    );
};

export default BlogPostMore;