import React from 'react';
import styles from './BlogPostContent.module.css'
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import Online from "../../../common/Online/Online";
const BlogPostContent = () => {
    const {blogPostPage} = useGlobalContext()

    return (
        <div className={stack('container-new',  styles.body)}>
            <p className={styles.text} dangerouslySetInnerHTML={{__html: blogPostPage?.blog.blogPostContentTekst}}></p>
            <Online className={styles.form} isSmall={true}></Online>
        </div>
    );
};

export default BlogPostContent;