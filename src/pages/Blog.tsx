import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import Online from "../components/common/Online/Online";
import BlogList from "../components/pages/BlogPage/BlogList/BlogList";

const Blog = () => {


    const {
        setTitle,
        setDescription,
        setBlogPage,
        setIsNewContainer
    } = useGlobalContext()

    useEffect(() => {
        setIsNewContainer(true)
    }, []);


    const [page] = usePage('blog')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
            setBlogPage(page)
        }
    }, [page])

    return (
        <Layout>
            <BlogList></BlogList>
            <Online></Online>
        </Layout>
    );
};

export default Blog;
