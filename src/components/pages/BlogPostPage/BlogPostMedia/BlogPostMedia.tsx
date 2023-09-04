import React, {createRef, useEffect, useState} from 'react';
import styles from './BlogPostMedia.module.css'
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";
import {useGlobalContext} from "../../../../context/context";

const BlogPostMedia = () => {
    const {blogPostPage} = useGlobalContext()

    const video = createRef<HTMLVideoElement>()
    const [isPlaying, setIsPlaying] = useState(false)
    const videoClickHandler = () => {
        setIsPlaying(prev => !prev)
    }

    useEffect(() => {
        if (video.current) {
            if (isPlaying) {
                video.current.play()
            } else {
                video.current.pause()
            }
        }
    }, [isPlaying])
    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <div className={styles.left}>
                <div className={styles.left__back}>
                    <div onClick={videoClickHandler} className={styles.video}>
                        <video ref={video} className={styles.video__media}
                               src={blogPostPage?.blog?.blogPostMediaVideo?.mediaItemUrl}
                        ></video>
                        {!isPlaying && <button
                            className={stack('link', styles.video__button)}>
                            <img className={styles.video__image} src="/image/play.png" alt="Иконка Play"/></button>}
                    </div>
                </div>
                <p className={styles.left__text}
                   dangerouslySetInnerHTML={{__html: blogPostPage?.blog.blogPostMediaTekstPodVideo}}></p>
            </div>
            <div className={styles.right}>
                <div className={styles.right__back}>
                    <Picture imageClassName={styles.right__image} className={styles.right__picture}
                             mobileIImageX1={blogPostPage?.blog.blogPostMediaIzobrazhenieDlyaTelefonaX1.sourceUrl}
                             mobileIImageX2={blogPostPage?.blog.blogPostMediaIzobrazhenieDlyaTelefonaX2.sourceUrl}
                             desktopIImageX1={blogPostPage?.blog.blogPostMediaIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                             desktopIImageX2={blogPostPage?.blog.blogPostMediaIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                             alt={blogPostPage?.blog.blogPostMediaIzobrazhenieDlyaKompyuteraX1.altText}></Picture>
                </div>
                <p className={styles.right__text}
                   dangerouslySetInnerHTML={{__html: blogPostPage?.blog.blogPostMediaTekstNadIzobrazheniem}}></p>
            </div>
        </div>
    );
};

export default BlogPostMedia;