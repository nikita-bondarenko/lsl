import React from 'react';
import styles from './BlogList.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import {useTrainings} from "../../../../hooks/useTrainings";
import Picture from "../../../images/Picture/Picture";
import {usePosts} from "../../../../hooks/usePosts";

const BlogList = () => {
    const {blogPage} = useGlobalContext()
    const [posts] = usePosts()
    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <h1 className={stack(styles.title)}
                dangerouslySetInnerHTML={{__html: blogPage?.blogPage?.blogZagolovok}}></h1>
            <div className={styles.screen}>
                <ul className={styles.list}>
                    {posts.map((item, index) => <li key={item.id} className={styles.list__item}>
                        <Picture alt={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.altText}
                                 className={styles.item__picture}
                                 desktopIImageX2={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                                 desktopIImageX1={item.blog.blogPostPreviewIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                                 mobileIImageX2={item.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX2.sourceUrl}
                                 mobileIImageX1={item.blog.blogPostPreviewIzobrazhenieDlyaTelefonaX1.sourceUrl}
                                 imageClassName={styles.item__image}></Picture>
                        <p className={styles.item__title}
                           dangerouslySetInnerHTML={{__html: item.blog.blogPostHeroZagolovok}}></p>
                        <p className={styles.item__text}
                           dangerouslySetInnerHTML={{__html: item.blog.blogPostHeroKratkoeOpisanie}}></p>
                    </li>)}
                </ul>
            </div>
            <button className={stack('button-primary', styles.button)}>Загрузить еще</button>
        </div>
    );
};

export default BlogList;