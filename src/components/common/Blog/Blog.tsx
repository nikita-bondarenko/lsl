import React, {useEffect, useState} from 'react';
import styles from './Blog.module.css'
import {stack} from "../../../hooks/useClassName";
import {useGlobalContext} from "../../../context/context";
import {sortDate} from "../../../hooks/useSortDate";
import Picture from "../../images/Picture/Picture";
import {BlogNode} from "../../../types/blogs";
import {Link} from "react-router-dom";

export type BlogProps = {
    title: string,
    linkText: string,
    linkHref: string,
    remark: string
}
const Blog = ({title, linkHref, linkText, remark}: BlogProps) => {

    const {blogs: blogData} = useGlobalContext()

    const [blog, setBlog] = useState<BlogNode[]>()

    useEffect(() => {
        if (blogData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setBlog(sortDate(blogData?.allBlog?.nodes, 'DESC').filter((item, index) => index < 3))
        }
    }, [blogData])

    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <h2 className={stack('title-secondary', styles.title)} dangerouslySetInnerHTML={{__html: title}}></h2>
            <ul className={styles.list}>
                {blog?.map((item, index) => <Link to={item.id} key={index} className={stack(styles.item)}>
                    <Picture imageClassName={stack('link',styles.item__image)} className={styles.item__picture}
                             desktopIImageX2={item?.blog?.blogPostImageKompyuter2x?.sourceUrl}
                             desktopIImageX1={item?.blog?.blogPostImageKompyuter1x?.sourceUrl}
                             mobileIImageX1={item?.blog?.blogPostImageTelefon1x?.sourceUrl}
                             mobileIImageX2={item?.blog?.blogPostImageTelefon2x?.sourceUrl}></Picture>
                </Link>)}
            </ul>
            <div className={styles.bottom}>
                <p className={stack('remark', styles.remark)} dangerouslySetInnerHTML={{__html: remark}}></p>
                <Link className={stack('button-primary', styles.link)} to={linkHref}
                      dangerouslySetInnerHTML={{__html: linkText}}></Link>
            </div>
        </section>
    );
};

export default Blog;