import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import {usePost} from "../hooks/usePost";
import BlogPostHero from "../components/pages/BlogPostPage/BlogPostHero/BlogPostHero";
import BlogPostContent from "../components/pages/BlogPostPage/BlogPostContent/BlogPostContent";
import BlogPostMore from "../components/pages/BlogPostPage/BlogPostMore/BlogPostMore";
import BlogPostMedia from "../components/pages/BlogPostPage/BlogPostMedia/BlogPostMedia";

const BlogPost = () => {


    const {
        setTitle,
        blogPostPage,
        setBlogPostPage,
        setIsNewContainer
    } = useGlobalContext()

    useEffect(() => {
        setIsNewContainer(true)
    }, []);

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
            <BlogPostHero></BlogPostHero>
            <BlogPostContent></BlogPostContent>
            <BlogPostMedia></BlogPostMedia>
            <BlogPostMore></BlogPostMore>
        </Layout>
    );
};

export default BlogPost;
