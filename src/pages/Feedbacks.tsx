import React, {useEffect} from 'react';
import {useGlobalContext} from "../context/context";
import {usePage} from "../hooks/usePage";
import Layout from "../components/layout/Layout";
import Messenger from "../components/common/Messenger/Messenger";
import Publications from "../components/common/Publications/Publications";
import FeedbacksSimple from "../components/common/Feedbacks/FeedbacksSimple/FeedbacksSimple";
import FeedbacksSocial from "../components/common/Feedbacks/FeedbacksSocial/FeedbacksSocial";


const Feedbacks = () => {

    const {
        setTitle,
        setDescription
    } = useGlobalContext()

    const [page] = usePage('otzyvy')
    useEffect(() => {
        if (page) {
            setTitle(page.metaData?.metaZagolovok)
            setDescription(page.metaData?.metaOpisanie)
        }
    }, [page])

    return (
        <Layout>
            <FeedbacksSimple></FeedbacksSimple>
            <FeedbacksSocial></FeedbacksSocial>
            <Publications></Publications>
            <Messenger></Messenger>
        </Layout>
    );
};

export default Feedbacks;
