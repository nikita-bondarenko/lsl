import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import {usePost} from "../hooks/usePost";

const BlogPost = () => {


    const {
        setTitle,
        blogPostPage,
        setBlogPostPage
    } = useGlobalContext()

    const postSlug = window.location.href.split('/').slice(-1).join('');

    const [post] = usePost(postSlug)
    useEffect(() => {
        if (post) {
            setTitle('LSL | ' + post.blog.blogPostHeroZagolovok)
            setBlogPostPage(post)
        }
    }, [post])

    return (
        <Layout>
            {blogPostPage?.id}
        </Layout>
    );
};

export default BlogPost;
