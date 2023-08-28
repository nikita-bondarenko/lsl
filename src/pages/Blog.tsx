import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";

const Blog = () => {


    const {
        setTitle,
        setDescription,
        setBlogPage
    } = useGlobalContext()

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
            blog
        </Layout>
    );
};

export default Blog;
